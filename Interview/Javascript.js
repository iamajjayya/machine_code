// 1.  Program to Find the Longest Word in a Given Sentence 



function findLongestWord(sentence) {
    // Step 1: Split the sentence into words
    const words = sentence.split(' ');

    // Step 2: Initialize a variable to keep track of the longest word
    let longestWord = "";

    // Step 3: Loop through the array of words
    for (let word of words) {
        // Step 4: If the current word is longer than the longestWord, update longestWord
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Step 5: Return the longest word
    return longestWord;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(longestWord); // Output: "jumps"

// 2. Is Palindrome 

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
 

//  3.  Is Palindrome without using built in Methods 

  function isPalindrome(str) {
     let  left =  0;
     let  right = str.length  - 1;

     while(left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left ++;
        right --;
     }

     return true;
  }

  cosole.log(isPalindrome('aba'))

  // Alternative Mathod 

function ReverseString(str) {
    let reverse  = ''

    for ( let i =  str.length -1 ; i>=0 ; i--) {
        reverse = reverse +str[i]
    }

    return reverse;
}

console.log(ReverseString('abc'))

  //4  Reverse NUmber

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

// Reverse a Array 

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

console.log(ReverseArray([1,2,3,4,5])) //output 5,4,3,2,1


// 5.  Remove Duplicate Element 


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

console.log(RemoveDuplicate([1,2,3,4,4,5]))

// 6. Count the elements



// function Maximum(arr) {
//    let count = 0;
//    let maxCount  = 0 ;

//    for( const num of  arr) {

//     if(num ===  1) {
//         count++;
//         maxCount = Math.max(maxCount , count)
//     } else {
//         count = 0;
//     }
     
//    }

//    return maxCount ;

// }

// console.log(Maximum([1,2,1,1,1,2,1]))


function Maximum(arr) {
    let count =  0;

    for(let num of  arr) {
        if(num  ===  1) {
            count ++ ;
        }

    }

    return count;
}

console.log(Maximum([1,2,3,4,5,1,1,2,1,1]))


// 6 . Factorial of a  Number 

function factorial(n) {
    if ( n == 0 || n == 1) {
        return 1 ;
    }

    return n * factorial(n-1)
}

console.log(factorial(5))