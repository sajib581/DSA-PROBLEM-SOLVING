//Steps Pattern
//Step(2)
//    '#'
//    '##'

//Step(3)
//    '#'
//    '##'
//    '###'

//Step(4)
//    '#'
//    '##'
//    '###'
//    '####'

function steps(n) {
    for (let row = 0; row < n; row++) {
        let step = '' ;
        for (let column = 0; column < n; column++) {
            if(row >= column){
                step+='#'
            }else{
                step+=''
            }
        }
        console.log(step);
    }
}

// steps(5)

function pyramid(n){
    let midpoint = Math.floor((2*n - 1)/2)
    for(let row = 0; row<n; row++){
        let level = ''
        for(let column = 0 ; column < 2*n-1; column++){
                                                                    console.log(midpoint - row, column ,"B", midpoint+row);
            if(midpoint - row <= column && midpoint+row >=column){
                level+='#'
            }else{
                level += ' '
            }
        }
        console.log(level);
    }
}

// pyramid(3)

function pyramidAlternative(n){
    for (let row = 1; row <= n ; row++) {
        let level = '' ;
        //space
        for(let column = 1; column<= n-row ; column++){
            level+=' '
        }    
        //Stars
        for(let star = 1; star<= 2*row-1 ; star++){
            level+='#'
        } 
        console.log(level);
    }
}

// pyramidAlternative(5)

function matrix(n){
    const results = []
    for(let i=0; i<n ; i++){
        results.push([])
    }
    let startColumn = 0;
    let endColumn = n-1 ; 
    let startRow = 0;
    let endRow = n-1;
    let counter = 1 ;
    while (startColumn<= endColumn && startRow<=endRow ) {
        //top row
        for(let i=startColumn; i<=endColumn ; i++){
            results[startRow][i] = counter
            counter++
        }
        
        startRow++
        
        //Right Column
        for(let i= startRow; i<= endRow; i++){
            results[i][endColumn] = counter
            counter++
        }
        
        endColumn-- ;

        //Bottom Row
        for(let i = endColumn; i>= startColumn; i--){
            results[endRow][i] = counter
            counter++
        }
        
        endRow-- ;

        //Start Column
        for (let i = endRow; i>= startRow; i--) {
            results[i][startColumn] = counter
            counter++            
        }
        
        startColumn++
    }
    console.log(results);
}

matrix(3)

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
    //base Case
    if(n==1)return 1
    //argument must be change
    return n+Fibonachi(n-1)
}
console.log(Fibonachi(10));

