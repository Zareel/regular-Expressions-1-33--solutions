// todo Match Single Characters Not Specified

//? Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

const quoteSample = "3 blind mice";
const myRegex = /[^0-9aeiou]/gi;
console.log(quoteSample.match(myRegex));
