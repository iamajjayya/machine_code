
function square(arr1,arr2) {

 arr1.sort((a,b) => a-b);
 arr2.sort((a,b) => a-b);

 for(let i=0;i < arr1.length;i++) {
    if(arr1[i] ** 2 !== arr2[i]){
        return false ;
    }
 }
 return true ;


}

console.log(square([1,2,3,4],[1,4,9,16]))