export const replaceNoNumericFromPrice = (string: string) => {
  if (string === 'Price') return string;

  const regex = /R\$\s*(\d{1,3}(?:\.\d{3})*(?:,\d{2})?)/;
  const match = string.match(regex);
  const price = match && match[1];

  const priceSerialized = Number(price?.replace('.', '').replace(',', '.'))

  return priceSerialized ?? ''
}