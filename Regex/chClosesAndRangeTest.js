//1.Write a regular expression that matches any lowercase letter.
const regex = /[a-z]/
console.log(regex.test("bicycle"))
console.log(regex.test("BICYCLE"))
//2.Create a Regex pattern that matches any digit and any uppercase letter.

const  regex2 = /[A-Z0-9]/
console.log(regex2.test("PAPER"))
console.log(regex2.test("1234"))
console.log(regex2.test("PAPer"))
console.log(regex2.test("PAPER1234"))
console.log(regex2.test("paper"))


//3.Write a regular expression that matches any non-word character.
console.log("testing the 3 question")
const regex3 = /\W/
console.log(regex3.test("#%4"))
console.log(regex3.test("#%"))
console.log(regex3.test("#%t"))
console.log(regex3.test("123"))
console.log(regex3.test("abcd"))




