export type Product = {
  [key: string]: {
    prices: number[]

  }
}

export const getPricesByProductName = (data: (string | number)[][]) => {
  return data.slice(1).reduce((acc, [name, price]) => {
    const { prices = [] } = acc[name] || {}

    return {
      ...acc,
      [name]: {
        prices: [...prices, +price],
      }
    }
  }, {} as Product)
}

