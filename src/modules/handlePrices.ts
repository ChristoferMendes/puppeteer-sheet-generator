import { Page } from "puppeteer";

export const handlePrices = (page: Page) => {

  const priceSelector = '.hn9kf > span'
  return page.$$eval(priceSelector, (el) => el.slice(0, 7).map(item => item.innerText))
}