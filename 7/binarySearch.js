function binarySearch(arr, target) {
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    let midIndex ;
    while (lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex + highIndex)/2)
        if(arr[midIndex]===target) return midIndex;
        if(arr[midIndex]<target){
            lowIndex = midIndex + 1
        }else if(arr[midIndex]>target){
            highIndex = midIndex-1
        }
    }
    return lowIndex
}
console.log(binarySearch([2,3,5,6,8,9], 80));

function searchInsert(arr, target) {
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    let midIndex ;
    while (lowIndex <= highIndex) {
        midIndex = Math.floor((lowIndex + highIndex)/2)
        if(arr[midIndex]===target) return midIndex;
        if(arr[midIndex]<target){
            lowIndex = midIndex + 1
        }else if(arr[midIndex]>target){
            highIndex = midIndex-1
        }
    }
    return lowIndex
}
console.log(searchInsert([2,3,5,6,8,9], 80));


//String Search Inside Strring
//Time Complexity O(m*n)  
///Space Complexity O(1)
var strStr = function(haystack, needle){
    if(needle=== ''){
        return 0 ;
    }
    
    for (let i = 0; i < haystack.length-needle.length+1 ; i++) {
        let j = 0        
            for (; j < needle.length; j++) {
                if(haystack[i+j] !== needle[j]) {
                    break ;
                }
            }
            if(j==needle.length){
                return i ;
            }
    }
    return -1 ;
}
console.log(strStr('a', 'a'));