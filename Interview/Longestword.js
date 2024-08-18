function  Longestword(sentence) {
  const words = sentence.split(' ');
  let longestword = ''

  for(let word of words) {

    if(word.length > longestword.length) {
        longestword = word;
    }
  }
  return `The Longest word is ${longestword} and its lenght of character ${longestword.length}`;




}


console.log(Longestword("The Javascriptprograming is Intreptend Object oriented Programing Language"))