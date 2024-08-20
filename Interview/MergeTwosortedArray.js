// function MergeTwosortedArray(arr1, arr2) {
//   let mergedarray = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       mergedarray.push(arr1[i]);
//       i++;
//     } else {
//       mergedarray.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     mergedarray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedarray.push(arr2[j]);
//     j++;
//   }

//   return mergedarray;
// }

// console.log(MergeTwosortedArray([1, 3, 4, 5], [1, 2, 4, 5]));


function mergeTwosortedArray (arr1,arr2) {

    let mergedarray = [...arr1,...arr2];

     mergedarray.sort((a,b) => a - b )

     return mergedarray

}


console.log(mergeTwosortedArray([3,1,4,5],[98,1,2,3,1]))