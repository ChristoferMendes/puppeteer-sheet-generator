import puppeteer, { ElementHandle } from "puppeteer";
import { logLoading } from "../../logger";
import { getPrices } from "../getPrices";
import { getStoreLinkXPaths } from "../getStoreLinkXPaths";
import { ItemsType } from "./types";

export const scrapItems = async (name: string) => {

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const link = `https://www.google.com/search?q=${name.replace(/\s/g, '+')}`

  logLoading();

  const shoppingXPath = '/html/body/div[7]/div/div[4]/div/div[1]/div/div[1]/div/div[2]/a'
  
  await Promise.all([
    page.goto(link),
    page.waitForXPath(shoppingXPath),
  ])

  await Promise.all([
    page.click(`xpath${shoppingXPath}`),
    page.waitForNavigation()
  ])

  const storeLinkXPaths = getStoreLinkXPaths()

  const prices = await getPrices(page)

  const items: ItemsType[] = []

  for (const storeLinkXPathIndex in storeLinkXPaths) {
    const linkXPath = storeLinkXPaths[storeLinkXPathIndex]
    const [linkElementHandle] = await page.$x(linkXPath) ?? [];
    const price = prices[storeLinkXPathIndex]
    const linkForTheProduct = await page.evaluate((el) => el?.href, linkElementHandle as ElementHandle<HTMLAnchorElement>)

    if (!price || !linkForTheProduct) continue;

    
    const linkWithHyperLink = `=HYPERLINK("${linkForTheProduct}", "Link here")`

    items.push([name, price, linkWithHyperLink])
  }

  page.close()
  return items;
}