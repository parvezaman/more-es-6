// declare variable based on the name of an object property

const myObject = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}

const myArray = [0,1,2,3,4,5];

const{c,e} = myObject;
const [x,y] = myArray;



console.log(e);
console.log(y);



// chaining and use of ?


const fish = {
    name: 'king hilsa',
    id: 58,
    price: 9000,
    phone: 46586185422,
    address: {
        country:{
            Bangladesh: {

                bdPlace1: 'Chandpur',
                place2: 'Barisal',
                place3: 'Coxs Bazar'

            },
            India: {
                
                inPlace1: 'Mumbai',
                inPlace2: 'Kalkata',
                place3: 'chennai'
                
                
            }
        }
    },
    dress: 'silver'
}

const {bdPlace1, place2} = fish.address.country.Bangladesh;
const topPlaceBd = bdPlace1;
console.log(topPlaceBd);

console.log(fish.address.country.Bangladesh.bdPlace1);
console.log(fish.address.country.amarDesh?.bdPlace1); //it will give an error || TypeError: Cannot read property 'bdPlace1' of undefined