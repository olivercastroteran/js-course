// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  CaretPosition.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
