function summation(num){
   if(num == 6) return 0;
   return num + summation(num+1);
}

var sum = 0;
console.log(summation(1));

// Factorial of a number using recursion
function factorial(num){
  if(num == 1) return 1
   return num * factorial(num-1);
}

console.log(factorial(5));
