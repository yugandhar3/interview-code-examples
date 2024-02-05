const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1 resolved");
    }, 20000)

})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 resolved");
    }, 10000)

})

async function asyncHandler() {
    console.log("1")
    const val = await promise1;
    console.log("2")
    console.log(val)

    const val2 = await promise2;
    console.log("22")
    console.log(val2)
}
// asyncHandler();

function promiseFunction() {
    console.log("11")
    promise1.then((d) => console.log(d))
    console.log("22")

    promise2.then((d) => console.log(d))
}
promiseFunction()