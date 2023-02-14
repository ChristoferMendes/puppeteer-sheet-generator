import puppeteer, { ElementHandle } from "puppeteer"
import { generateSheet } from "./modules/generateSheet"
import { handlePrices } from "./modules/handlePrices"
import { handleStoreLinks } from "./modules/handleStoreLinks"

export const bootstrap = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  // const shoppingLink = 'hdtb-mitem'

  const pcItems = ['Fonte Gamemax GS']

  const links = pcItems.map(name => `https://www.google.com/search?q=${name.replace(/\s/g, '+')}`)

  const insertName = async (name: string) => {

    for (const link of links) {

      const shoppingXPath = '/html/body/div[7]/div/div[4]/div/div[1]/div/div[1]/div/div[2]/a'

      await Promise.all([
        page.goto(link),
        page.waitForXPath(shoppingXPath),
      ])

      await Promise.all([
        page.click(`xpath${shoppingXPath}`),
        page.waitForNavigation()
      ])

      const storeLinkXPaths = handleStoreLinks()

      const prices = await handlePrices(page)

      type Items = {
        link: string;
        price: string;
        name: string
      }

      const items: any[] = []

      for (const storeLinkXPathIndex in storeLinkXPaths) {
        const linkXPath = storeLinkXPaths[storeLinkXPathIndex]
        const [linkElementHandle] = await page.$x(linkXPath) ?? [];
        const linkForTheProduct = await page.evaluate((el) => el?.href, linkElementHandle as ElementHandle<HTMLAnchorElement>)
        const price = prices[storeLinkXPathIndex]

        // const object = {
        //   v: price, t: "s", s: { font: { name: "Courier", sz: 24 } },
        //   v: price, t: "s", s: { font: { name: "Courier", sz: 24 } },
          
        // }

        const aoo = [
          {v: price, t: "s", s: { font: { name: "Courier", sz: 24 } }},
          {v: linkForTheProduct, t: "s", s: { font: { name: "Courier", sz: 24 } }}
        ]

        items.push(aoo)
      }

      return items;
    }

  }

  for (const pcItemsIndex in pcItems) {
    const object = await insertName(pcItems[pcItemsIndex])
    console.log(object)
    generateSheet(object)
  }
}