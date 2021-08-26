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

const{name,phone,dress} = fish;
const {bdPlace1, place2} = fish.address.country.Bangladesh;
const {inPlace1, inPlace2} = fish.address.country.India;
const topPlaceBd = bdPlace1;
const topPlaceIn = inPlace2;
console.log(topPlaceBd);
console.log(topPlaceIn);
console.log(phone);



const number = [0,1,2,3,4,5,6,7,8,9,10];
const[a,v] = number;
console.log(v);


const[x,y,z] = [10,9,8,7,6,5];
console.log(y);