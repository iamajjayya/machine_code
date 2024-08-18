

// function Maximum(arr) {
//    let count = 0;
//    let maxCount  = 0 ;

//    for( const num of  arr) {

//     if(num ===  1) {
//         count++;
//         maxCount = Math.max(maxCount , count)
//     } else {
//         count = 0;
//     }
     
//    }

//    return maxCount ;

// }

// console.log(Maximum([1,2,1,1,1,2,1]))


function Maximum(arr) {
    let count =  0;

    for(let num of  arr) {
        if(num  ===  1) {
            count ++ ;
        }

    }

    return count;
}

console.log(Maximum([1,2,3,4,5,1,1,2,1,1]))