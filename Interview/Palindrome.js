// // function isPalindrome(str) {
// //     const reversedStr =  str.split('').reverse().join('');
// //     return str === reversedStr
// // }

// // console.log(isPalindrome('aba'))

// function isPalindrome(str) {

//     left = 0 ;
//     right  = str.length  - 1 ;

//     while( left < right) {
//         if(str[left] !== str[right]) {
//             return false ;
//         }
//         left ++ ;
//         right --;

//     }

//     return true;
// }

// console.log(isPalindrome('ababa'))



function reverse(arr) {
    
    let result = []

    for(let i = arr.lenght - 1; i>= 0 ; i--) {
          arr[i] = result;
    }
    return result;
}


console.log(reverse[1,2,3,4])


