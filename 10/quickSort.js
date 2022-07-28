function swap(arr, idx1, idx2){
    [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]]
}

function povit(arr, povitIndex = 0, endIndex = arr.length-1){
    let swapIndex=povitIndex
    for (let i = povitIndex+1; i <= endIndex; i++) {
        if(arr[i]<arr[povitIndex]){
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    } 
    swap(arr, povitIndex, swapIndex)
    return swapIndex;
}

//Time Complexity O(nlogn) Space Complexity O(logn)
function quickSort(arr, left=0, right= arr.length -1){
    if(left < right){
        let povitIndex = povit(arr, left, right)
        quickSort(arr, left, povitIndex-1)
        quickSort(arr, povitIndex + 1, right)
    }
    return arr
}
console.log(quickSort([5,9,7,4,2,3]) );