export const getStoreLinkXPaths = () => {
  const MAX_ITEMS = 7;
  const linksXPaths = Array.from({ length: MAX_ITEMS }, (_, i) => {
    const itemIndex = i + 1;
    const linkXPath = `/html/body/div[7]/div/div[4]/div[3]/div/div[3]/div[1]/g-scrolling-carousel/div[1]/div/div/div[${itemIndex}]/a`;

    return linkXPath;
  });

  return linksXPaths
}