import { generateSheet } from "./modules/generateSheet"
import { removeAditionalInfo } from "./modules/removeAditionalInfo"
import { scrapItems } from "./modules/scraptItems"
import { ItemsType } from "./modules/scraptItems/types"
import { sortCompareFunction } from "./modules/sortCompareFunction"
import { pcItems } from "./store/pcItems"



export const bootstrap = async () => {
  const itemsInTheSheet: ItemsType[] = []

  for (const pcItemIndex in pcItems) {
    const array = await scrapItems(pcItems[pcItemIndex])

    const arraySorted = [...array].sort(sortCompareFunction);

    itemsInTheSheet.push(...arraySorted)
    console.log('Scrapped the price of', pcItems[pcItemIndex])
  }

  const arraySheet = [['Name', 'Price', 'Link'], ...itemsInTheSheet, [{ f: '' }]]

  const updatedArray = removeAditionalInfo(arraySheet)
  
  generateSheet(updatedArray)
}