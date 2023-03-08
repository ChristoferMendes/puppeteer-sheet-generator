import { pipe } from "../../utils/pipe";
import { getAveragePrices } from "./getAveragePrice";
import { getPricesByProductName } from "./getPricesByProductName";
import { sumAllPrices } from "./sumAllPrices";

export const getTotalPrices = (data: (string | number )[][]) => {
  const totalPrices = pipe(getPricesByProductName, getAveragePrices, sumAllPrices)(data)

  return totalPrices;
}



