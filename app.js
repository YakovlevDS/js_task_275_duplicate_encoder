// ? Task:


// Description:
//The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("


// Solution 1
const duplicateEncode = word => word.toLowerCase().replace(/./g, i => word.indexOf(i) == word.lastIndexOf(i) ? '(' : ')')
    // Solution 2
const duplicateEncode1 = word => word.toLowerCase()
    .split('')
    .map((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v) ? '(' : ')')
    .join('')

console.log(duplicateEncode("hello world"));
console.log(duplicateEncode1("hello world"));


// ! Explanation: