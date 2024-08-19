

// function RemoveDuplicate(arr) {

//     return [...new Set(arr)]

// }

// console.log(RemoveDuplicate([1,1,2,2,3,4,5,5]))


function RemoveDuplicate(arr) {
    const uniquearr = [];

    for(let i =0 ;i < arr.length; i++) {
        if(uniquearr.indexOf(arr[i]) == -1) {
            uniquearr.push(arr[i])
        }
    }

    return uniquearr;
}

console.log(RemoveDuplicate([1,2,3,4,4,5,1]))

// function Sum(arr, t) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === t) {
//                 return [i, j]; // Return the indices of the two numbers that add up to the target
//             }
//         }
//     }
//     return []; // Return an empty array if no such pair is found
// }

// // Example usage
// console.log(Sum([1, 2, 3, 4, 5], 8)); // Output: [1, 3]
