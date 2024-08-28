//1.Write a regular expression that matches the word “world” at the end of a string.

const regex = /world$/

const string1 = "We are happy to live in this world"

console.log(regex.test(string1))
const regex2 = /abc.def/;

console.log(regex2.test("abcdef"));    
console.log(regex2.test("abcXdef"));   
console.log(regex2.test("abc1def"));   
console.log(regex2.test("abc123def")); 
console.log(regex2.test("abdef"));     
