let amount = parseInt(prompt("amount?")); // a number OR NaN
let fromcurrency = prompt("from currency");
let tocurrency = prompt("to currency");
let ratio = 23208;
let result = 0;

function usdToVnd() {
	result = amount * ratio;
}

function vndToUsd() {
	result = amount / ratio;
}

// function currencyamount(
// console.log(amount = document.getElementById("amount").value;);
// )

if (isNaN(amount) === false) {
	if (
		(fromcurrency === "usd" || fromcurrency === "Usd") &&
		(tocurrency === "vnd" || tocurrency === "Vnd")
	) {
		usdToVnd();
	}
	if (
		(fromcurrency === "vnd" || fromcurrency === "Vnd") &&
		(tocurrency === "usd" || tocurrency === "Usd")
	) {
		vndToUsd();
	}

	console.log(amount, fromcurrency, "in", tocurrency, "is", result);
} else alert("please enter a number");

// document.getElementById("amount")

// parseInt(){
// if isNaN()
// }

// parseInt("ty4yty") == NaN

// if (isNaN("10") == false ) {

// }
