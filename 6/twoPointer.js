function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum < 0) {
            left++;
        }
        else if (sum > 0) {
            right--;
        }
    }
    return undefined
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


//125 LeetCode valid palindrome 
var isPalindrome = function(s) {
    const normaliseStr=s.toLowerCase().replace(/[\W_]/g, "")
    console.log(normaliseStr);
    let left = 0;
    let right = normaliseStr.length-1
    while (left<right) {
        if(normaliseStr[left]!==normaliseStr[right]){
            console.log(normaliseStr[left], normaliseStr[right]);
            return false
        }
        left++;
        right-- ;
    }
    return true
};
console.log(isPalindrome("ab_a"));

function maxSubArraySum(arr, num){
    if(arr.length < num){
        return null ;
    }
    let tempSum = 0;
    let max = 0 ;

    for (let i = 0; i < num; i++) {
        tempSum += arr[i]        
    }
    max = tempSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum-arr[i-num] + arr[i]
        max = Math.max(tempSum, max)       
    }
    return max
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2));

//LeetCode 53 Kaden's Algorithm
var maxSubArray = (nums)=>{
    let currentSum = nums[0]
    let maxSum=currentSum;
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum+nums[i], nums[i])
        maxSum = Math.max(maxSum, currentSum)        
    }
    return maxSum
}

console.log(maxSubArray([5,4,-1,7,8 ]));

console.log("Hello");
//Leetcode 3 Longest SubString
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let j=0;
    let max = 0 ;
    const uniqueSet=new Set()
    while(i<s.length){
        if(!uniqueSet.has(s[i])){
            uniqueSet.add(s[i])
            i++
            max=Math.max(max, uniqueSet.size)
        }else{
            uniqueSet.delete(s[j])
            j++
        }
    }
    return max;
};
lengthOfLongestSubstring('abcbmababxyb')

//LeetCode 209 Minimum Size Subarray Sum DO not ANSWER
var minSubArrayLen = function(target, nums) {
    let length = Infinity
    let i=0;
    let left=0;
    let sum=0;
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i]
        while(sum>=target){
            length = Math.min(length, i-left+1)
            sum = sum-nums[left]
            console.log(sum);
            left++            
        }
        
    }
    return length === Infinity ? 0 : length;
};
minSubArrayLen(7, [2,3,1,3,4,3])
console.log(minSubArrayLen(11,[1,1,1]));