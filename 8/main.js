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

steps(5)