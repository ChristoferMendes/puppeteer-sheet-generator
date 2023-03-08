import { ProductAverage } from "./getAveragePrice"

export const sumAllPrices = (averagePrices: ProductAverage) => {
  const prices = Object.entries(averagePrices).reduce((acc, [, { averagePrice }]) => {
    

    return acc + averagePrice
  }, 0)


  return prices.toFixed(2)
}