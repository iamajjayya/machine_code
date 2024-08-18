

function ReverseString(str) {
    let reverse  = ''

    for ( let i =  str.length -1 ; i>=0 ; i--) {
        reverse = reverse +str[i]
    }

    return reverse;
}

console.log(ReverseString('abc'))