
//problem Solving Approach    
// input- arr1-['a', 'b', 'c'] arr2-[1, 2, 3, 'z'] //false
// input- arr1-['a', 'b', 'c'] arr2-[1, 2, 3, 'c'] //true
//In general technique
function isElementExists(arr1, arr2) {
    //flag variable
    let exists = false
    for(let elm of arr1){
       if(arr2.includes(elm)){
        exists = true
        break
       }
    }
 
    return exists
  }
  console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'b']))

  // time complexity O(n + m)
//space complexity O(n)
function isElementExists(arr1, arr2) {
    const frequencyCounter = {}
    for (let elm of arr1) {
      frequencyCounter[elm] = true
    }
   
    for (let elm of arr2) {
      if (elm in frequencyCounter) {
        return true
      }
    }
  }
  console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'b']))