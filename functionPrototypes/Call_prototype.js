const person = {
    name: "yugandhar",
    age: 27,
}

function getPerson(Country) {
    console.log(this.name + " " + this.age + " " + Country)
}
getPerson.call(person, "India")

Function.prototype.myCall = function (context) {
    let dynamicVlaue = Array.from(arguments).slice(1)
    console.log(context.name + " " + context.age + " " + dynamicVlaue.join(","));

}
getPerson.myCall(person, "India", "Ap")