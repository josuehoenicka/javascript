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


