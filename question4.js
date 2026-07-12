const cart =[
    {item :"pen", price:20},
    {item :"Book", price:100},
    {item :"pen", price:800},

];

// using reduce calculate the total price of all items 

const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
}, 0); 

console.log(totalPrice);