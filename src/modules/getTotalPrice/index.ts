import { pipe } from "../../utils/pipe";
import { getMinPrice } from "./getMinPrice";
import { getPricesByProductName } from "./getPricesByProductName";
import { sumAllPrices } from "./sumAllPrices";

export const getTotalPrice = (data: (string | number)[][]) => {
  const totalPrices = pipe(getPricesByProductName, getMinPrice, sumAllPrices)(data)

  return totalPrices;
}



