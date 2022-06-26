let productName = prompt("Enter the name of the product"); //xbox control
let productPrice = Number(prompt("Enter the price")); //175
let productQty = Number(prompt("Enter the quantity")); //1

let subtotal, finalPrice;
const taxes = 0.12;

subtotal = productPrice * productQty;
finalPrice = (subtotal*taxes)+subtotal;

console.log("Subtotal: " + subtotal);
console.log("Final price adding taxes: " + finalPrice);

document.getElementById("productName").innerHTML = productName;
document.getElementById("productPrice").innerHTML = productPrice;
document.getElementById("productQty").innerHTML = productQty;

document.getElementById("subtotal").innerHTML = subtotal;
document.getElementById("taxes").innerHTML = "12%";
document.getElementById("finalPrice").innerHTML = finalPrice;