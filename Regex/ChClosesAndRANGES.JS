const  regex = /[abc]/
console.log(regex.test("bananan"))
console.log(regex.test("shabalaza"))
console.log(regex.test("crazy"))
console.log(regex.test("captain"))
console.log(regex.test("draft"))

//Using Ranges within Character Classes

const regex2c= /a-z/
console.log(regex2c.test("pasta"))
console.log(regex2c.test("carlos"))
console.log(regex2c.test("Shabalza"))
console.log(regex2c.test(1,2,3,4))
console.log(regex2c.test("1,2,3,4"))
console.log(regex2c.test("12345"))
console.log(regex2c.test("pasta23"))