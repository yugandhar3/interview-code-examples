const cart = [];

createCart(cart)
    .then((cartDetails) => {
        console.log(cartDetails);
        return proccedToPayment(cart); // Return the promise from proccedToPayment
    })
    .then((paymentDetails) => console.log(paymentDetails))
    .catch((error) => console.log(error))
    .then(console.log("finally in promise"))

function createCart(cart) {
    const promise = new Promise(function (resolve, reject) {
        if (cart && cart.length > 0) { // Check if cart is not empty
            resolve("Cart is created");
        } else {
            reject("Cart is empty");
        }
    });
    return promise;
}

function proccedToPayment(cart) {
    return new Promise((resolve, reject) => {
        if (cart && cart.length > 0) {
            resolve("Payment done successfully");
        } else {
            reject("Payment failed: Cart is empty");
        }
    });
}
