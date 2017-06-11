const TAX_RATE = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;

var amt = 0;
var accountBalance = prompt("How much is in your bank account");
const spendingThreshold = accountBalance / 2;

function calculateFinalPurchaseAmount(){
	amt = amt + (amt*TAX_RATE);
	return amt;
}
function makeDollarAmount(){
	newAmt = calculateFinalPurchaseAmount (amt);
	console.log(amt.toFixed(2));
}
var newAmt;
var numOfPhones;
var numOfAccessories;

if (accountBalance >= phonePrice){
	numOfPhones++;
	numOfPhones = numOfPhones * phonePrice;
	//console.log("Total amount for phones will be: " + makeDollarAmount(numOfPhones))
	accountBalance  = accountBalance - numOfPhones;
}
else if (accountBalance >= accessoryPrice){
	numOfAccessories++;
	numOfAccessories = numOfAccessories * accessoryPrice;
	//console.log = ("Total amount for accessories will be: " + makeDollarAmount(numOfAccessories));
	accountBalance = accountBalance - numOfAccessories;
}
amt = numOfAccessories + numOfPhones;
console.log ("You're total amount is: " calculateFinalPurchaseAmount(amt) );