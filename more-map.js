const friends =['aman', 'rakib', 'daizy', 'shahidul', 'alvee', 'tanvee','zaraa'];

const fLengths = friends.map(f => f.length);
console.log(fLengths);


// another powerful example
const products =[
    {name: 'water bottle', price: 50, color: 'red' },
    {name: 'water glass', price: 5, color: 'white' },
    {name: 'laptop', price: 50000, color: 'gray' },
    {name: 'monitor', price: 5000, color: 'black' },
    {name: 'mouse', price: 500, color: 'black' }
]

// now i want to get all the product name: first using normal loop
const productNames = [];
for(const product of products){
    productNames.push(product.name);
}
console.log(productNames);


// the same job can be done using map
// const productNamesByMap = products.map(product => product.name);
const productNamesByMap = products.map(x => x.name);
console.log(productNamesByMap);
console.log(products.map(x => x.price));



// for each method
// products.forEach(product => console.log(product));
// products.forEach(x => console.log(x));
// const priceHike = products.forEach(x => x.price = x.price + 5);
const priceHike = products.map(x => x.price = x.price + 5);
console.log(priceHike);