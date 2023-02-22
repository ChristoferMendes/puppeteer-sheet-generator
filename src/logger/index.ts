const RESET_COLOR = `\x1b[0m`
const CYAN = '\x1b[36m'
const MAGENTA = '\x1b[35m'
const GREEN = '\x1b[32m'
const BLUE = '\x1b[96m'

export const logLoading = () => {
  console.log(`${CYAN}====================================`);
  console.log(`LOADING...`);
  console.log('====================================', RESET_COLOR);
}

export const logScrappedItem = (item: string) => {
  console.log(`${MAGENTA}Scrapped the price of${RESET_COLOR}`, item)
}

export const logUpdatedSheet = () => {
  console.log(`${CYAN}====================================`, RESET_COLOR);
  console.log(`${GREEN}SHEET UPDATED!`, RESET_COLOR)
  const link = 'https://docs.google.com/spreadsheets/d/1Ih4EbfV6VjW3J3ltQYdFDnE7ZyxW9K5anVIyjTqRdK4/edit#gid=0'
  console.log('Link:', `${BLUE}${link}`, RESET_COLOR)
}
