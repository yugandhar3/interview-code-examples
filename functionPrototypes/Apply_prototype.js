const person = {
    name: "yugandar",
    age: "27",
}

function getPerson(country) {
    console.log(this.name + " " + this.age + " " + country)
}
getPerson.apply(person, ["India"])

Function.prototype.myApply = function (context) {
    let dynamicVlaue = Array.from(arguments).slice(1)
    console.log(context.name + " " + context.age + " " + dynamicVlaue.join(" "))
}
getPerson.myApply(person, ["India"])