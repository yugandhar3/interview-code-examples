
/**
 * addEventListener will take 3 params 
 * click method
 * call back function
 * capture value ---->True/False
 * default capture value is false 
 * if capture value is true event will follow capturing rule , up to down --->event capturing
 * if capture value is false event will follow bubbling rule, down  to up --->event bubbling
 */
document.querySelector("#grandParent").addEventListener("click", function (e) {
    e.stopPropagation()
    console.log("grand parent clicked")
})

document.querySelector("#parent").addEventListener("click", function (e) {
    e.stopPropagation()
    console.log("parent clicked")
})
document.querySelector("#child").addEventListener("click", function (e) {
    e.stopPropagation()
    console.log("child clicked")
})



