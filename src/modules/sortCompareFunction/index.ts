import { ItemsType } from "../scraptItems/types";

export const sortCompareFunction = (a: ItemsType, b: ItemsType) => {
  const [, priceA] = a;
  const [, priceB] = b;
  
  if (typeof priceA !== 'string' || typeof priceB !== "string") return 1

  const priceASerialized = parseFloat(priceA.replace(/[^0-9,-]+/g, "").replace(",", "."));
  const priceBSerialized = parseFloat(priceB.replace(/[^0-9,-]+/g, "").replace(",", "."));
  return priceASerialized - priceBSerialized;
}