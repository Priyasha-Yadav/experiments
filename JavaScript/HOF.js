

function add(a,b){
    return a+b;
}

function calc(a, b, add){
    console.log(add(a,b));
}

calc(1,2,add);


function multiply(num){
    return function(number){
        return num*number;
    }
}

let num = multiply(2);
console.log(num);

const numbers = [1,2,3,4,5,6,7];
const result = numbers.map(x => x*2).filter(y => y%2 == 0); // method chaining
console.log(result);
