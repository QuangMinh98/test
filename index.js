const arr = [2, 5, 8, 10];

const x = 15

let result = [];

let left = 0;

let right = arr.length - 1;

while(left <= right) {
    const sum = arr[left] + arr[right]
    if(sum === x) {
        result = [left, right]
        break;
    }

    if(sum < x) {
        left++;
    }

    if(sum > x) {
        right--;
    }
}

console.log(result);