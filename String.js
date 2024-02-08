let string = "  I love java script love "

//1. charAt(index): Returns the character at the specified index.
console.log(string.charAt(4))

// 2.charCodeAt(index): Returns the Unicode value of the character at the specified index.
console.log(string.charCodeAt(4))

// 3.concat(str1, str2, ...): Combines one or more strings and returns a new string.
console.log(string.concat("yugandhar"))

// 4.includes(searchValue[, startIndex]): Determines whether a string contains the specified value.
console.log(string.includes('java')); // true
console.log(string.includes('java', 6));
console.log(string.includes('Java', 6));
console.log(string.includes('Java')); //false

// 5.endsWith(searchString[, length]): Checks whether a string ends with the specified string/character.
console.log(string.endsWith("script"))

// 6.indexOf(searchValue[, startIndex]): Returns the index of the first occurrence of a specified value within a string, 
// starting the search at the specified index.
console.log(string.indexOf("love"))

//7. lastIndexOf(searchValue[, startIndex]): Returns the index of the last occurrence of a specified value within a string, 
// searching backwards from the specified index.
console.log(string.lastIndexOf("love"))

// 8.valueOf(): Returns the primitive value of a String object.
console.log(string.valueOf())

// 9.trimStart(): Removes leading whitespace from a string.
console.log(string.trimStart())

// 10.toLowerCase(): Returns the calling string value converted to lowercase.
console.log(string.toLocaleLowerCase())

// 11.toString(): Returns the value of a String object.
console.log("to string", string.toString())

// 12.toUpperCase(): Returns the calling string value converted to uppercase.
console.log(string.toUpperCase())

// 13.trim(): Removes whitespace from both ends of a string.
console.log(string.trim())

// 14.trimEnd(): Removes trailing whitespace from a string.
console.log(string.trimEnd())

// 15.substring(startIndex[, endIndex]): Returns the part of the string between the 
console.log(string.substring(9))
const str = 'Hello, world';

// Using substring()
const substring1 = str.substring(7); // 'world'
const substring2 = str.substring(0, 5); // 'Hello'

// Using substr()
const substr1 = str.substr(7); // 'world'
const substr2 = str.substr(0, 5); // 'Hello'


