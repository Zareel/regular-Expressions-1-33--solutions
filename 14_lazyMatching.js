// todo Find Characters with Lazy Matching

//? Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
/*
const str = "titanic";
const myRegex = /t[a-z]*i/;
const result = str.match(myRegex);
console.log(result);
*/
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
