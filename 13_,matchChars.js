// todo Match Characters that Occur Zero or More Times

//? For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aaaaaaaaaaaaaaaa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);
