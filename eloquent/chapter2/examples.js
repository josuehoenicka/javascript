/**************************************************************************/

let color = "light";
console.log(color); /* light */ 
color = "dark" /* dark */

/**************************************************************************/

let myDebt = 140;
/* I paid 35 dollars */
myDebt -= 35;
console.log(myDebt); /* 105 */

/**************************************************************************/

let one = 1, two = 2;
console.log(one + two); /* 3 */

/**************************************************************************/

prompt("Introduce a message");

/**************************************************************************/

console.log(Math.max(2, 4)); /* 4 */
console.log(Math.max(2, 4)); /* 2 */

/**************************************************************************/

let insertNumber = prompt("Choose a number");
let yourNumber = insertNumber;
console.log("Your number is: " + yourNumber);

/**************************************************************************/

if (1 + 1 == 2) {
	console.log("It's true!") /* It's true */
}

/**************************************************************************/

let insertBigNumber = prompt("Introduce a number");
let bigNumber = insertBigNumber;
if (bigNumber > 0 && bigNumber <= 100) {
	console.log("It isn't a big number :(")
} else if (bigNumber < 0) {
	console.log("Negative number :/")
} else if (bigNumber > 100) {
	console.log("Nice! It's a big number ;)")
} else {
	console.log("Error, you don't introduced a number! :(")
}

/**************************************************************************/

let parNumber = 0;
while(parNumber <= 12) {
	console.log(parNumber); /* 0, 2, 4, 6, 8, 10, 12 */
	parNumber += 2;
}

/**************************************************************************/

let insertNumberRaised = prompt("Introduce your number");
let numberRaised = insertNumberRaised;
let int = 1;
while(int < 10) {
	numberRaised *= 2;
	int +=  1;
}
console.log("Your number raised ten is: " + numberRaised);


/**************************************************************************/

let yourName;
do {
	yourName = prompt("How are you?");
} 
while (!yourName);
console.log(yourName);

/**************************************************************************/

let result = 1;
for (let i = 0; i < 10; i++) {
	result *= 2;
}
console.log(result); /* 1024 */

/**************************************************************************/

for (let x = 20; x++) {
	if (actual % 7 == 0) {
		console.log(actual);
		break;
	}
}
console.log(x); /* 21 */

/**************************************************************************/

switch (prompt("How is weather?")) {
	case "beautifil":
		console.log("Great! Have a nice today :)");
		break;
	case "ok":
		console.log("It's ok!");
		break;
	case "awful":
		console.log("Oh, so sorry! :(");
		break;
	default:
		console.log("I don't understand you, sorry");
		break;
}

/**************************************************************************/

let bigRedHat; /* camel case */
let big_red_hat; /* snake case */
let bigredhat;
let BigRedHat;

/**************************************************************************/