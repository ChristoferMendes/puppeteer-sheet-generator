import { ItemsType } from "../scraptItems/types";
import { replaceNoNumericFromPrice } from "./replaceNoNumericFromPrice";

export const removeAditionalInfo = (arraySheet: ItemsType[]) => {
  const priceIndex = 1
  
  const updatedArray = arraySheet.map(row => {
    const [, price] = row;
    if (typeof price !== 'string') return ['Price']

    const priceWithoutLetters = replaceNoNumericFromPrice(price)
    return [...row.slice(0, priceIndex), priceWithoutLetters, ...row.slice(priceIndex + 1)];
  });

  return updatedArray;
}