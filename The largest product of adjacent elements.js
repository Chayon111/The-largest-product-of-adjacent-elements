
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

const inputArray = [3, 6, -2, -5, 7, 3];

function solution(inputArray){
    let firstBiggestNum = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++){
        let lastBiggestNum = inputArray[i] * inputArray[i + 1];
        if (lastBiggestNum > firstBiggestNum){
            firstBiggestNum = lastBiggestNum;
        }
    }
    return firstBiggestNum;
}
console.log(solution(inputArray)); // 21