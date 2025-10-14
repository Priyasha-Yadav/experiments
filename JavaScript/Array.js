// Array methods
let arr = [1,2,3,4,5,6,5,7];

function indexOf(arr, target, index = 0){
    for(let i = index; i< arr.length; i++){
        if(arr[i] == target) return i;
    }
    return -1;
}

console.log(indexOf(arr,5, 3));

function lastIndexOf(arr, target, index = 0){
  let lastIndex = -1;
    for(let i = index; i< arr.length; i++){
        if(arr[i] == target) lastIndex = i;
    }
    return lastIndex;
}

console.log(lastIndexOf(arr,5, 3));

console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join(' '));

console.log('Hi'.split(''));

