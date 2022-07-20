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

pyramidAlternative(5)