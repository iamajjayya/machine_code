// function factorial(num) {
//     let result = 1;

//     for (let i = 2 ; i<= num; i++) {
//         result = result * i
//     }
//     return result;
// }

// console.log(factorial(5))


function factorial(n) {
    if ( n == 0 || n == 1) {
        return 1 ;
    }

    return n * factorial(n-1)
}

console.log(factorial(5))