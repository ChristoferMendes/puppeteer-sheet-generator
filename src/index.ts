import { logScrappedItem } from "./logger"
import { removeAditionalInfo } from "./modules/removeAditionalInfo"
import { scrapItems } from "./modules/scraptItems"
import { ItemsType } from "./modules/scraptItems/types"
import { sortCompareFunction } from "./modules/sortCompareFunction"
import { uploadToGoogleSheet } from "./modules/uploadToGoogleSheet"
import { pcItems } from "./store/pcItems"



export const bootstrap = async () => {
  const itemsInTheSheet: ItemsType[] = []

  for (const pcItem of pcItems) {
    const array = await scrapItems(pcItem)

    const arraySorted = [...array].sort(sortCompareFunction);

    itemsInTheSheet.push(...arraySorted)
    logScrappedItem(pcItem)
  }

  const arraySheet = [['Name', 'Price', 'Link'], ...itemsInTheSheet]

  const updatedArray = removeAditionalInfo(arraySheet)
  
  uploadToGoogleSheet(updatedArray)
}