function sumZero(arr){
    let left=0;
    let right = arr.length-1;
    let sum = 0;
    while (left<right) {
        sum = arr[left]+arr[right];
        if(sum ===0){
            return[arr[left], arr[right]]
        }
        else if(sum<0){
            left-- ;
        }
        else if(sum > 0){
            right-- ;
        }
    }
}
console.log(sumZero([-6,-3,-2,-1,0,1,2,3]));