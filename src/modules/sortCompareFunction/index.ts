import { ItemsType } from "../scraptItems/types";

export const sortCompareFunction = (a: ItemsType, b: ItemsType) => {
  const [, priceA] = a;
  const [, priceB] = b;
  
  if (typeof priceA !== 'string' || typeof priceB !== "string") return 1


  const removeNonNumbers = (string: string) => {
    const nonDigitPattern = /[^0-9,-]+/g
    const numbersOnly = string.replace(nonDigitPattern, '')

    const priceSerialized = numbersOnly.replace(',', '.')

    return +priceSerialized
  }

  const priceASerialized = removeNonNumbers(priceA)
  const priceBSerialized = removeNonNumbers(priceB)
  return priceASerialized - priceBSerialized;
}