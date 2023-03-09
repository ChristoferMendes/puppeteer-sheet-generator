import { ProductMinPrice } from "./getMinPrice"

export const sumAllPrices = (minPrices: ProductMinPrice) => {
  const prices = Object.entries(minPrices).reduce((acc, [, { minPrice }]) => {
    

    return acc + minPrice
  }, 0)


  return prices.toFixed(2)
}