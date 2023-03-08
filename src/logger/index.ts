const RESET_COLOR = `\x1b[0m`
const GREEN = '\x1b[32m'
import { spinner, log } from '@clack/prompts'

const loading = spinner();

export const logLoading = () => {
  loading.start(`Loading`)
}

export const logScrappedItem = (item: string) => {
  loading.stop(`${GREEN}✓${RESET_COLOR} Scrapped the price of ${item}`)
}

export const logUpdatedSheet = () => {
  log.success('SHEET UPDATED!')
  const link = 'https://docs.google.com/spreadsheets/d/1Ih4EbfV6VjW3J3ltQYdFDnE7ZyxW9K5anVIyjTqRdK4/edit#gid=0'
  log.info(`Link: ${link}`)
}

export const logTotalPrice = (totalPrice: number) => {
  log.info(`Total price: ${totalPrice}`)
}
