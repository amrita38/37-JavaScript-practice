const products = [
  { name: "phone", price: 25000 },
  { name: "laptop", price: 65000 },
  { name: "watch", price: 50000 },
];

// take: find the product with the highest price.

const highest = products.reduce((a, b) => {
  if (a.price > b.price) {
    return a;
  } else {
    return b;
  }
});

console.log(highest);