const brlPrice = "3.300,45";
const priceInNumber = +brlPrice.replace('.', "").replace(",", ".");

console.log(priceInNumber); // 1300.45
