
function mergeArray(arr1, arr2) {
    let mergearray =[]
    let i =0;
    let  j = 0 ;

    while( i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            mergearray.push(arr1[i])
            i++;
        } else  {
            mergearray.push(arr2[j])
            j++;    
            
        }
    }  
   
     while( i < arr1.length) {
        mergearray.push(arr1[i])
        i++;
     }

     while( j < arr2.length) {
        mergearray.push(arr2[j])
        j++;
     }




    return mergearray;


}


console.log(mergeArray([1,2,3,4],[1,3,4,5]))