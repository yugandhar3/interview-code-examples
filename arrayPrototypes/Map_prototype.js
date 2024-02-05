const array = [1, 2, 3, 4]
console.log(array.map(x => x * 2))

Array.prototype.myMap = function (cb) {
    let outPut = [];
    for (let i = 0; i < this.length; i++) {
        outPut.push(cb(this[i]))
    }
    return outPut
}
let output = array.myMap(i => i * 2)
console.log(output)
