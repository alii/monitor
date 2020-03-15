/**
 * Matches keywords against a product
 * @param {string} productName The name of the product
 * @param {string} keywords The keywords. E.g: `+yeezy, +350, -500`
 * @return {boolean} True if the keywords match, false if not.
 */
export const matchKeyword = (productName, keywords) => {
  const name = productName.toLowerCase().trim();

  return (
    keywords
      .toLowerCase()
      .split(',')
      .map(keyword => keyword.trim())
      .filter(
        word =>
          (word.includes('+') && !name.includes(word.substr(1))) ||
          (word.includes('-') && name.includes(word.substr(1))),
      ).length === 0
  );
};
