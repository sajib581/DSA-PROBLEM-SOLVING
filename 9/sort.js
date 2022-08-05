function sortArr(arr){
    arr.sort()
    return arr
}

const a = sortArr(['Banana', 'Orrange', 'Apple', 'Mango'])
console.log(a);

//time complexity -O(n^2)
//Space complexity - O(n)
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j]>arr[j+1]){
                //Swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swap = true
            }            
        }
        if(!swap) break
    
    }
    return arr
}

console.log(bubbleSort([1,50,10,2,20,30,40]));

//Selectiom Sort
//Time Complexity O(n^2)
//Space Complexity O(1)
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let lowest = i ;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i]
            arr[i]=arr[lowest]
            arr[lowest]=temp
        }
    }
    return arr;
}
console.log(selectionSort([1,50,10,2,20,30,40]));

function insertionSort(arr){
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i]
        for (var j = i-1; j>=0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr;
}

console.log(insertionSort([1,50,10,2,20,30,40]));