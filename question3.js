const products = [
    {id:1, name:"laptop"},
    {id:2, name:"Mouse"},
    {id:3, name:"Keyboard"}
]

const product = products.find(item => item.id===2);
console.log(product);