function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    let sum;
    console.log(left, right);
    while (left < right) {
        sum = arr[left] + arr[right];
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        }
         if (arr[left] + arr[right] < 0) {
            left++;
        }
         if (arr[left] + arr[right] > 0) {
            right--;
        }
    }
    return false
}
 console.log(sumZero([-6, -3, -2, -1, 0, 1, 2, 3]));


function anyDublicates(arr) {
    let i = 0;
    let j = 1;

    while (arr.length!==0) {
        if(arr[i]===arr[j]){
            return true
        }
        i++;
        j++
    }
    return false
}

console.log(anyDublicates([-6, -3, -2, -2, -1, 0, 1, 2, 3]));
console.log("HEllo");

function maxSubArraySum(arr, num){
    if(arr.length<num){
        return null
    }
    let max = 0 ;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        max+= arr[i]        
    }
    console.log(max);
    tempSum = max
    for (let j = num; j < arr.length; j++) {
        console.log(tempSum, arr[j-num], arr[j],);
        tempSum = tempSum - arr[j-num] + arr[j]
        max = Math.max(tempSum, max)        
    }
    return max
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2));

var maxSubArray = (nums)=>{
    let currentSum = nums[0]
    let maxSum = currentSum
    for (let i = 1; i < nums.length; i++) {        
        currentSum = Math.max(currentSum+nums[i], nums[i])
        console.log(currentSum);
        maxSum = Math.max(currentSum, maxSum)   
        console.log(maxSum); 
    }
    console.log(maxSum);
}

maxSubArray([-2,1,-3,4,-1])

//Leetcode 3 Longest SubString
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j=0;
    let max = 0 ;
    const uniqueSet = new Set()
    while(i<s.length){
        if(!uniqueSet.has(s[i])){
            uniqueSet.add(s[i])                                                       
            max=Math.max(max, uniqueSet.size)
            i++
        }else{
            uniqueSet.delete(s[j])
            j++
        }
    }
};
lengthOfLongestSubstring('abcbm')

//abcbmababxyb