const array = ["hi", "hell", "good", "news"]
let output = array.reduce((acc, curr) => {
    if (curr.length < acc.length) {
        return acc
    } else {
        return curr
    }
})
console.log(output)

const data = [{ name: "yugandhar", age: 20 }, { name: "anoop", age: 30 }]
// const div = document.getElementById("root");
// div.innerHTML = data.map((item) => {
//     return `${item.name} ${item.age}`
// })
// console.log(div.innerHTML)



function promisefunction(n) {
    const p = new Promise((resolve, reject) => {
        if (n < 4) {
            resolve("resolved")
        } else {
            reject("rejected")
        }
    })
    return p
}
promisefunction(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))



function sayHi() {
    setTimeout(() => {
        console.log(`hi ${this.name}`)
    }, 500)
}
sayHi.call({ name: "yugandhar" })

var variable = 10;

(() => {
    console.log(variable)
    var variable = 20
    console.log(variable)
})()