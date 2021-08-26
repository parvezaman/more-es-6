const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,2,3];

// filter

const greaterThan10 = numbers.filter(x => x > 10);
console.log(greaterThan10);

const greaterThan5 = numbers.map(x => x>5);
console.log(greaterThan5);


const products =[
    {name: 'water bottle', price: 50, color: 'red' },
    {name: 'water glass', price: 5, color: 'white' },
    {name: 'laptop', price: 50000, color: 'gray' },
    {name: 'monitor', price: 5000, color: 'black' },
    {name: 'mouse', price: 500, color: 'black' }
]

const priceMoreThan4500 = products.filter(x => x.price > 4500);
console.log(priceMoreThan4500);

// now what if i want to know how many products are black
const blackProducts = (products.filter(x => x.color == 'black'));
console.log(blackProducts.length);



// find method
console.log(products.find(x => x.color == 'black'));
console.log(numbers.find(x => x == 15));