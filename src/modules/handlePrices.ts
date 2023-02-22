import { Page } from "puppeteer";

export const getPrices = (page: Page) => {
  const priceSelector = '.hn9kf > span'
  return page.$$eval(priceSelector, (el) => el.slice(0, 7).map(item => item.innerText))
}