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