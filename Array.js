const array = [1, 2, 3, 4, 5]
console.log(array)
// methods

// 1.forEach(): Executes a provided function once for each array element.
array.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element * 2}`);
});

// 2.map(): Creates a new array by calling a provided function on every element in the calling array.
let map_output = array.map((x) => x * 2)
console.log(map_output)

// 3.filter(): Creates a new array with elements that pass the test implemented by the provided function.
let filter_output = array.filter((x) => x > 3)
console.log(filter_output)

// 4.find(): Returns the first element in the array that satisfies the provided testing function.
let find_output = array.find((x) => x > 3)
console.log(find_output)

// 5.findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
let findIndex_output = array.findIndex((x) => x === 3)
console.log(findIndex_output)

// 6.reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
let reduce_output = array.reduce((acc, cur) => acc + cur, 0)
console.log(reduce_output)

//7. some(): Tests whether at least one element in the array passes the test implemented by the provided function.
//  If at least one element satisfies the condition, some() returns true; otherwise, it returns false.
let some_output = array.some((x) => x == 6)
console.log(some_output)

// 8.every(): Tests whether all elements in the array pass the test implemented by the provided function.
let every_output = array.every((x) => x > 0)
console.log(every_output)

// 9.includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let include_output = array.includes(9)
console.log(include_output)

// 10.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOf_output = array.indexOf(8)
console.log(indexOf_output)

// 11.push(): Adds one or more elements to the end of an array and returns the new length of the array.
array.push(10)
console.log(array)

// 12.pop(): Removes the last element from an array and returns that element.
array.pop()
console.log(array)

//13.shift(): Removes the first element from an array and returns that element.
array.shift()
console.log(array)

// 14.unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
array.unshift(1)
console.log(array)

// 15.splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let splice_output = array.splice(1, 2)
console.log(splice_output)
array.splice(1, 0, 1)
console.log(array)

// 16.slice(): Returns a shallow copy of a portion of an array into a new array object.
// Extract elements from index 1 (inclusive) to index 4 (exclusive)
const slicedArray = array.slice(1, 4);
console.log(slicedArray);
// Extract elements from index 2 to the end of the array
const slicedNumber = array.slice(2);
console.log(slicedNumber)
// Create a shallow copy of the original array
const copiedArray = array.slice();
// Extract elements from index 1 to index -1 (last element) of the array
const slicedLetters = array.slice(1, -1);
console.log(slicedLetters)

// 17.concat(): Returns a new array comprised of this array joined with other array(s) and/or value(s).
let array2 = [6, 7, 8, 9, 10]
console.log(array.concat(array2))

// 18.sort(): Sorts the elements of an array in place and returns the sorted array.
console.log(array.sort())

// 19.reverse(): Reverses the elements of an array in place.
console.log(array.reverse())

// 20.isArray(): Determines whether the passed value is an Array.
let isArray_output = Array.isArray(array)
console.log(isArray_output)

// 21.split()
let split_output = '1 2 3'
console.log(split_output.split(' ').join())

// 22
const fruits = ['apple', 'banana', 'orange'];

const fruitsString = fruits.toString();

console.log(fruitsString); // Output: "apple,banana,orange"

// 23
const numbers = [1000, 2000, 3000, 4000];

const formattedString = numbers.toLocaleString();

console.log(formattedString); // Output will depend on the locale, for example: "1,000, 2,000, 3,000, 4,000"


// 24.
const primitiveValue = numbers.valueOf();

console.log(primitiveValue);// Output: "1,2,3,4,5"

// 25

const sum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 15 (sum of all elements: 5 + 4 + 3 + 2 + 1)