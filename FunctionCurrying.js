// Function currying is a technique in functional programming where a function is transformed into a sequence of functions,
//  each taking a single argument. The result is a chain of functions, each responsible for a specific argument,
//  and when all the arguments are provided, the original function is executed.

// Non-curried function
function add(x, y, z) {
    return x + y + z;
}

// Curried function
function currying(x) {
    return function a(y) {
        return function b(z) {
            console.log(x + y + z)
        }
    }
}
const sum = (a = 0) => (b) => (b ? sum(a + b) : a)
console.log(add(1, 2, 3))
currying(1)(2)(3)
console.log(sum(1)(2)(3)())