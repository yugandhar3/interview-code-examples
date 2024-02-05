const array = [1, 2, 3, 4]
console.log(array.reduce((acc, cur) => acc + cur, 0))

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i])
    }
    return acc
}
let output = array.myReduce((acc, curr) => acc + curr, 0)
console.log(output)


// finding max value
let max = array.myReduce((max, curr) => curr > max ? curr : max, array[0])
console.log(max)