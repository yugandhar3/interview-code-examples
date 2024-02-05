const person = {
    name: "yugandhar",
    age: 27,
}
function getPerson(country) {
    console.log(this.name + " " + this.age + " " + country)
}

let personDetails = getPerson.bind(person)
personDetails("India")


Function.prototype.myBind = function (context) {
    let originalFunction = this;
    return function () {
        console.log(arguments)
        originalFunction.apply(context, arguments)
    }

}

let personInfo = getPerson.myBind(person)
personInfo("India")