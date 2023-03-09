import { Product } from "./getPricesByProductName";

export type ProductMinPrice = {
  [key: string]: {
    minPrice: number;
  }
}

export const getMinPrice = (prices: Product) => {
  return Object.entries(prices).reduce((acc, [name, { prices }]) => {
    const minPrice = Math.min(...prices)
  
  
    return {
      ...acc,
      [name]: {
        minPrice,
      }
    }
  }, {} as ProductMinPrice)
}