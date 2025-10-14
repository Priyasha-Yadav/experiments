
// Insertion Sort Algorithm in JavaScript
let num = [2, 3, 4, 5, 1, 6];
function insertionSort(num) {
    for (let i = 1; i < num.length; i++) {
        let a = num[i];
        let b = i - 1;

        while (b >= 0 && num[b] > a) {
            num[b + 1] = num[b];
            b--;
        }

        num[b + 1] = a;
    }
    return num;
}

console.log(insertionSort(num));



// Bubble Sort Algorithm in JavaScript

function bubbleSort(nums) {
    // maximum n-1 iterations 
    for (let i = 0; i < nums.length - 1; i++) {
        let x = 0;
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
                x++;
            }
        }
        if (x == 0) break;
    }
    return nums;
}

let nums = [1, 2, 3, 4, 5];
console.log(bubbleSort(nums))
