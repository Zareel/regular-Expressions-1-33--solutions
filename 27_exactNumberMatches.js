//todo Specify Exact Number of Matches

//? Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /tim{4}b/i; // Change this line
let result = timRegex.test(timStr);
console.log(result);
