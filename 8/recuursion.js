//1. iterative solution
function countToZero(num) {
    for (let i = num; i >=0; i--) {
        console.log(i);
    }
}

countToZero(10)

//1. recursive Solution
function countRecursion(num){
    console.log(num);
    //base case
    if(num===0) return

    //argument must be change
    countRecursion(num-1)
}
countRecursion(10)

function sumRange(num){
    //base Case
    if(num===0)return 0
    //argument must be change
    return num + sumRange(num-1)
}
console.log(sumRange(10));

//2. Iterative Solution
//Create a range
function createRange(num1, num2){
    let rangeArr = []
    for (let i = num1; i <= num2; i++) {
        rangeArr.push(i)
    }
    return rangeArr
}
console.log(createRange(10,20));

//2. using Impure recursive Solution
function createRanges(num1, num2){
    let rangrArr = [];
    function helper(helperInput, targetNum=20){
        rangrArr.push(helperInput)
        //base case
        if(helperInput === targetNum) return 
        helper(helperInput+1, targetNum)
    }
    helper(num1, num2)
    console.log(rangrArr);
}
createRanges(10,20)

//2. using Pure Recursive Solution
//not clear very well
function create_Range(num1, targetNum = 20, rangeArr = []) {
    rangeArr = rangeArr.concat(num1)
    if(num1 === targetNum) return rangeArr
    return create_Range(num1+1, targetNum, rangeArr)
}
console.log(create_Range(10,20));

//3. Fibonachi
function Fibonachi(n){
    if(n==1)return 1
    return n+Fibonachi(n-1)
}
console.log(Fibonachi(10));