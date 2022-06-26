//1. Check  the two array is either same or not 
// Time Complexity - O(n*m)
// Space Complexity - O(1)
function isSame(arr1, arr2) {
    if(arr1.length !== arr2.length) return false
    for(let i=0; i<arr1.length; i++) {
        const index = arr2.indexOf(arr1[i]);
        console.log(index);
        if(index === -1){
            console.log("Reached here");
            return false;
        }else{
            //element exists in array
            arr2.splice(index,1)
        }
    }
    return true;
}
console.log(isSame([1,2,1,5], [1,1,5,2]));

//1. Time Complexity - O(n)
//  Space Complexity - O(n+m)
function isSameAlternative(arr1, arr2){
    const hashTable1 = {}
    for (const ele of arr1) {
        hashTable1[ele] = hashTable1[ele]+1 || 1;
    }
    const hashTable2 = {}
    for (const ele of arr2) {
        hashTable2[ele] = hashTable2[ele]+1 || 1;
    }
    for (const key in hashTable1) { 
        if(!(key in hashTable1 && hashTable1[key] ===hashTable2[key])) {
            return false;
        }
    }
    return true;
}
console.log(isSameAlternative([1,2,1,5], [1,1,5,2]));

//2 LeetCode #1 with complexity O(n^2)
const  twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return false;
};
console.log(twoSum([2,7,11,15], 22));

//2 LeetCode #1 with complexity O(n)
const  twoSumBetterCode = function(nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++){
        const want = target - nums[i];
        if(want in hashTable){
            return [i, hashTable[want]];
        }
        hashTable[nums[i]] = i ;
        
    }
};
console.log(twoSumBetterCode([2,7,11,15], 22));

