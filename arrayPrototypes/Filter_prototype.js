let array = [1, 2, 3, 4]

console.log(array.filter(x => x > 2))

Array.prototype.myFilter = function (cb) {
    let outPut = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            outPut.push(this[i])
        }
    }
    return outPut
}

let output = array.myFilter(i => i > 2)
console.log(output)
