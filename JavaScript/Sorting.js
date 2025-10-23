
// Insertion Sort Algorithm in JavaScript
let arr = [5, 4, 1, 3, 2]
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

console.log(insertionSort(arr));


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

console.log(bubbleSort(arr))


// Selection Sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let sIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[sIndex])
                sIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[sIndex];
        arr[sIndex] = temp;

    }
    return arr;
}

console.log(selectionSort(arr))