// how to create a class

class Support{             // class er nam Capital letter diye start hoi
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){         // class er vitore function likhte "function" keyword lekha lage na
        console.log('Start a support session');
    }           

}

const human = new Support('human being','dhaka');
const aMan = new Support('a man of no where', 'who knows');
console.log(human);
console.log(aMan);



class products{
    constructor(name, price, color){
        this.name = name;
        this.price = price;
        this.color = color;
    }
}

const myProducts = [];
const waterBottle = new products('water bottle', 50, 'red');
const waterGlass = new products('water glass', 5, 'white');
const laptop = new products('laptop', 50000, 'gray');
const monitor = new products('monitor', 5000, 'black');
const mouse = new products('mouse', 500, 'black');
/* const products =[
    {name: 'water bottle', price: 50, color: 'red' },
    {name: 'water glass', price: 5, color: 'white' },
    {name: 'laptop', price: 50000, color: 'gray' },
    {name: 'monitor', price: 5000, color: 'black' },
    {name: 'mouse', price: 500, color: 'black' }
]
 */
// console.log(waterBottle, waterGlass, laptop, monitor, mouse);

myProducts.push(waterBottle, waterGlass, laptop, monitor, mouse);

console.log(myProducts);