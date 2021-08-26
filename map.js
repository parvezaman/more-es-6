const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// lets try doubling the numbers of the Array
/* const output = [];

for( const number of numbers){
    const result = number * 2;
    output.push(result);
}

console.log(output); */

// the same thing with arrow function
/*const doubleIt = (x) => x*2;
 const outputArrowFunction = [];
for(const number of numbers){
    outputArrowFunction.push(doubleIt(number));
}
console.log(outputArrowFunction); */

// now lets try map method using our old arrow function | Remember!! map takes functions as input, So we will pass our arrow function to get the doubled numbers

// map method

/* const doubleIt = (x) => x*2;
console.log(numbers.map(doubleIt)); */
// console.log(numbers.map(x => x*2)); //not only single line; you also can pass multiple line function
console.log(numbers.map(x => {
    const add = x + 5;
    const diff = x-3;
    const multi = add * diff;
    return multi;
})); 