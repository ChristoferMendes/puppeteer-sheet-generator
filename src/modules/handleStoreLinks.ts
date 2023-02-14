export const handleStoreLinks = () => {
  const linksNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
  const linksXPaths = linksNumbers.map(number => {
    const numberToString = String(number);

    return `/html/body/div[7]/div/div[4]/div[3]/div/div[3]/div[1]/g-scrolling-carousel/div[1]/div/div/div[${numberToString}]/a`
  })

  return linksXPaths
}