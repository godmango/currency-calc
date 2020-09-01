// let amount = parseInt(prompt("amount?"));
// let fromcurrency = prompt("from currency");
// let tocurrency = prompt("to currency");
let ratio = 23208;
let result = 0;

function con() {
	let amount = document.getElementById("inputAmount").value;

	if (isNaN(amount) == true) {
		alert("please type a number");
		return;
	}

	let fromcurrency = document.getElementById("fromcurrencylist").value;
	let tocurrency = document.getElementById("tocurrencylist").value;

	if (fromcurrency === "USD" && tocurrency === "VND") {
		usdToVnd(amount, fromcurrency, tocurrency);
	} else if (fromcurrency === "VND" && tocurrency === "USD") {
		vndToUsd(amount, fromcurrency, tocurrency);
	}
	document.getElementById(
		"resultArea"
	).innerHTML = `convert amount is ${result}`;
}

function usdToVnd(amount, fromCurrency, tocurrency) {
	result = amount * ratio;
	result = formatCurrency(tocurrency, result);
}

function vndToUsd(amount, fromCurrency, tocurrency) {
	result = amount / ratio;
	result = formatCurrency(tocurrency, result);
}
function formatCurrency(type, value) {
	const formatter = new Intl.NumberFormat(type, {
		currency: type,
		style: "currency",
	});
	return formatter.format(value);
}

// if (isNaN(amount) === false) {
// if (
// (fromcurrency === "usd" || fromcurrency === "Usd") &&
// (tocurrency === "vnd" || tocurrency === "Vnd")
// ) {
// usdToVnd();
// }
// if (
// (fromcurrency === "vnd" || fromcurrency === "Vnd") &&
// (tocurrency === "usd" || tocurrency === "Usd")
// ) {
// vndToUsd();
// }

// console.log(amount, fromcurrency, "in", tocurrency, "is", result);
// } else alert("please enter a number");
