
function ReverseString(str) {
    let start  = 0;
    let end  = str.length - 1 ;

    while(start <  end) {

        let  tempt  =  str[start] ;
        str[start] = str[end];
        str[end] = tempt;

        start++;
        end--;
    }

   return str;
}


console.log(ReverseString(['a','b','c']))