// 1.Reverse a String: Write a function that reverses a string without using built-in reverse() method.
let string = "sai";

function stringReverse(string) {
    let output = "";
    for (let i = string.length - 1; i >= 0; i--) {
        output += string[i]
    }
    return (output)
}
function stringReverseIn(string) {
    let output = string.split("").reverse().join('')
    console.log(output)

}
console.log(stringReverse(string))

// 2.Palindrome Check: Write a function that checks whether a given string is a palindrome.
// racecar === racecar   -->true
//sai === sai --->false

function Palindrome(string) {
    let output = string.split('').reverse().join('')
    return string === output
}
console.log(Palindrome("racecar"))


// 3.Find the Longest Word: Write a function that finds the longest word in a given string.

function LongestWord(string) {
    let words = string.split(" ");
    let Longest = "";
    for (let word of words) {
        if (word.length > Longest.length) {
            Longest = word
        }
    }
    return Longest

}
console.log(LongestWord("Find the Longest Word"))

// 4.FizzBuzz: Write a program that prints the numbers from 1 to n. 
// But for multiples of three, print "Fizz" instead of the number,
//  and for the multiples of five, print "Buzz". 
// For numbers that are multiples of both three and five, print "FizzBuzz".

// for 1 to n
// i%3 ===0 -->Fizz
// i%5 ===0 -->Buzz
// 

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

fizzBuzz(15);

// 5.Capitalize First Letter: Write a function that capitalizes the first letter of each word in a sentence.
// hello world ---> Hello World
// split(" ") --> separate the word ina array
// map()----> loop all words 
// charAt(0).toUpperCase()---> it convert first letter as capital
// then join(" ") --> it will return  complete string
function CapitalizeFirstLetter(string) {
    let output = string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return output
}
console.log(CapitalizeFirstLetter("hello world"))

// 6.Reverse Words in a String: Write a function that reverses the order of words in a sentence.
// hello world  ---->world hello
// split(" ") ---> array 
// revers() --> it will reverse the words
//join()

function ReverseWords(string) {
    let output = string.split(' ').reverse().join(' ')
    return output
}
console.log(ReverseWords("hello world"))

// 7.Count Characters: Write a function that counts the occurrences of each character in a string and returns
//  an object with the counts.

// hello -->{h:1,e:1,l:2,o:1 }
// output ={}
// for loop
// check object conation value increment else add 1 to it
function countCharacters(str) {
    const charCount = {};
    for (const char of str) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    return charCount;
}
console.log(countCharacters("hello"))

function countWord(str) {
    let array = str.split(' ')
    const charCount = {};
    for (const char of array) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    return charCount;
}
console.log(countWord("i love javaScript and i love python"))
function countWords(str) {
    const regex = str.split(' ').length
    return regex;
}

console.log(countWords("This is a sample sentence."));
// 8.Reverse Case: Write a function that toggles the case of each character in a string.
// Hello World ----> hELLO wORLD
//  split('')---> Hello World
//map()--> loop
// word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
// join(')

function ReverseCase(string) {
    let output = string.split('').map((word) => word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()).join('')
    return output
}
console.log(ReverseCase("Hello World"))


// 9.Remove Duplicates from String: Write a function that removes duplicate characters from a string.
//hello --> helo
// [...new Set(string)]

function RemoveDuplicates(string) {
    let output = [...new Set(string)].join('')
    return output
}
console.log(RemoveDuplicates("hello"))

// 10.Remove Non-Alphanumeric Characters: Write a function that removes all non-alphanumeric characters from a string.
// "Hello! How are you?" --->"Hello How are you"
// regx= /[^a-zA-Z0-9\s]/g
// match().length

function RemoveNonAlphanumeric(str) {
    let regx = /[^a-zA-Z0-9/s]/g
    return str.replace(regx, ' ')

}
console.log(RemoveNonAlphanumeric("Hello! How are you?"))


// 11.Extract Numbers from String: Write a function that extracts all numbers from a given string.
function ExtractNumbers(str) {
    let regx = /\d+/g
    // return str.replace(regx, '')
    return str.match(regx)

}
console.log(ExtractNumbers("I have 5 apples and 3 oranges."))