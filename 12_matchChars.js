// todo Match Characters that Occur One or More Times

//? You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

let difficultSpelling = "Mississipi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
console.log(result);
