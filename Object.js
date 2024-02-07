
const object = {
    name: "yugandhar",
    age: 30,
}
// 1.Object.keys(): Returns an array of a given object's own enumerable property names.
console.log(Object.keys(object)) //[ 'name', 'age', 'admin' ]

// 2.Object.values(): Returns an array of a given object's own enumerable property values.
console.log(Object.values(object)) //[ 'yugandhar', 30, true ]

// 3.Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(object)) //[ [ 'name', 'yugandhar' ], [ 'age', 30 ], [ 'admin', true ] ]

// 4.Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object. 
// It returns the target object.
// source = object2
// target = object
// const object2 = {
//     admin: true
// }
// console.log(Object.assign(object, object2))//{ name: 'yugandhar', age: 30, admin: true } 

// 5.Object.freeze(): Freezes an object, preventing new properties from being added to it, 
// existing properties from being removed, and changing the enumerability, configurability, 
// or writability of existing properties. It returns the same object that was passed in.
Object.freeze(object)
delete object.age
object.admin = false // This will not add 'admin' to the object
console.log(object)//{ name: 'yugandhar', age: 30 }

// 6.Object.seal(): Seals an object, preventing new properties from being added to it,
//  and marking all existing properties as non-configurable.
//  Values of present properties can still be changed as long as they are writable. 
// It returns the same object that was passed in.
Object.seal(object)
delete object.age // This will not delete 'a' from the object
console.log(object)



const obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // Allowed
obj.b = 3; // Not allowed
delete obj.a; // Not allowed
console.log(obj)


Object.freeze(obj);
obj.a = 2; // Not allowed
obj.b = 3; // Not allowed
delete obj.a; // Not allowed
console.log(obj)
