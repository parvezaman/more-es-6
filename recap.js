// let vs const 
// arrow function to square a number
// const square = x => x*x;
const square = x => {
    let squared = 0;
    for(let i =1; i<= x; i++){
        squared = squared +x;
    }
    return squared;
}
console.log(square(3));