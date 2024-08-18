function ReverseNumber(num) {
    let reverse = 0;
    let  sign = Math.sign(num);
    num = Math.abs(num)

    while ( num > 0) {
        let lastdigit  =  num % 10;
        reverse = reverse * 10 + lastdigit ;
        num =  Math.floor(num / 10) ;
    }

    return reverse *  sign
}
console.log(ReverseNumber(12345)) //output :  54321