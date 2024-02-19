const arr = [2, 5, 8, 10];

const sortedArr = [... arr].sort((a, b) => a - b);

const x = 15;

let result = [];

let left = 0;

let right = arr.length - 1;

while(left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if(sum === x) {
        const firstResult = arr.findIndex((value) => value === sortedArr[left]);
        const secondResult = arr.findIndex((value) => value === sortedArr[right]);
        result = [firstResult, secondResult];
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