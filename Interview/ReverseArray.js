// Input [ 1,2,3,4,5]

function ReverseArray (arr) {
    let start = 0 ;
    let end =  arr.length - 1;


    while (start < end) {
        let temp  = arr[start];
        arr[start] = arr[end]
        arr[end] = temp ;

        start++;
        end --;
    }

    return arr;
}

console.log(ReverseArray([1,2,3,4])) //output 4,3,2,1