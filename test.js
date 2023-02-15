

const array = [
  ['Name', 'Price', 'Link'],
  [
    'RTX 3060',
    'R$ 1.899,00',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABABGgJjZQ&sig=AOD64_3679T9_UvzdcRrNccmhtGB9X0lxg&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I6ww&adurl=", "Link for the product")'
    }
  ],
  [
    'RTX 3060',
    'R$ 2.059,99',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABADGgJjZQ&sig=AOD64_2QMb5BovAs1iXKr1HELUV7xzhtCA&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I7gw&adurl=", "Link for the product")'
    }
  ],
  [
    'RTX 3060',
    'R$ 2.399,99',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABAFGgJjZQ&sig=AOD64_0vkbcGsnZ9vwLRSi8D7sgUEXXSkA&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I8Aw&adurl=", "Link for the product")'
    }
  ],
  [
    'RTX 3060',
    'R$ 2.399,99',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABAHGgJjZQ&sig=AOD64_09xOHFVXFG5ma5jmeqzY9bdDYFgA&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I9Aw&adurl=", "Link for the product")'
    }
  ],
  [
    'RTX 3060',
    'R$ 2.159,99',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABAJGgJjZQ&sig=AOD64_1XHR1Iotcn__blcKytJBHekRRB-Q&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I9gw&adurl=", "Link for the product")'
    }
  ],
  [
    'RTX 3060',
    'R$ 2.317,99',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABALGgJjZQ&sig=AOD64_0mJBf36thLE0df5lIwTaFTu38IgA&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I-Aw&adurl=", "Link for the product")'
    }
  ],
  [
    'RTX 3060',
    'R$ 300,32 Custava 3000',
    {
      f: 'HYPERLINK("https://www.google.com/aclk?sa=l&ai=DChcSEwjqqqLZsJb9AhWuQkgAHZ8wCMQYABANGgJjZQ&sig=AOD64_2sMUg8IMyXdrZe6-BjJd3hv_N1iw&ctype=5&q=&ved=0ahUKEwiCpZ7ZsJb9AhWtr5UCHc0SBwUQww8I_Aw&adurl=", "Link for the product")'
    }
  ]
]

const priceIndex = 1;

const replaceNonNumericFromString = (string) => {
  const regex = /R\$\s*(\d{1,3}(?:\.\d{3})*(?:,\d{2})?)/;
  const match = string.match(regex);
  const price = match && match[1];

  return price;
}

const updatedArray = array.map(row => {
  if (row[priceIndex] === 'Price') return ['Name', 'Price', 'Link'];

  const priceWithoutLetters = replaceNonNumericFromString(row[priceIndex])
  console.log(priceWithoutLetters)
  return [...row.slice(0, priceIndex), priceWithoutLetters, ...row.slice(priceIndex + 1)];
});

console.log(updatedArray)