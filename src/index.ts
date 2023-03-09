import { logIntro, logScrappedItem } from "./loggers"
import { removeAditionalInfo } from "./modules/removeAditionalInfo"
import { scrapItems } from "./modules/scraptItems"
import { ItemsType } from "./modules/scraptItems/types"
import { sortCompareFunction } from "./modules/sortCompareFunction"
import { uploadToGoogleSheet } from "./modules/uploadToGoogleSheet"
import { pcItems } from "./store/pcItems"

export const bootstrap = async () => {
  const itemsInTheSheet: ItemsType[] = []
  logIntro()

  for (const pcItem of pcItems) {
    const itemStrict  = `"` + pcItem + `"`
    const array = await scrapItems(itemStrict)

    const arraySorted = [...array].sort(sortCompareFunction);

    itemsInTheSheet.push(...arraySorted)
    logScrappedItem(itemStrict)
  }

  const arraySheet = [['Name', 'Price', 'Link'], ...itemsInTheSheet]

  const updatedArray = removeAditionalInfo(arraySheet)
  
  uploadToGoogleSheet(updatedArray)
}
