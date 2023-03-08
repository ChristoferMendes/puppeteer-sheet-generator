import { Product } from "./getPricesByProductName"

export type ProductAverage = {
  [key: string]: {
    averagePrice: number;
  }
}

export const getAveragePrices = (prices: Product) => {
  return Object.entries(prices).reduce((acc, [name, { prices }]) => {
    const averagePrice = prices.reduce((acc, curr) => acc + curr) / prices.length
  
  
    return {
      ...acc,
      [name]: {
        averagePrice: averagePrice
      }
    }
  }, {} as ProductAverage)
}