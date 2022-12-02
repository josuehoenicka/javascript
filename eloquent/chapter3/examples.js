/**************************************************************************/

const potencialTwo = function(x) {
	return x * x;
}

/**************************************************************************/

const makeNoise = function(noise){
	console.log(noise);
}

/**************************************************************************/

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z) // 60
}
// z is undefined here //
console.log(x + z) // 40

/**************************************************************************/

const middle = function(number) {
	return number / 2;
}

let number = 10;

console.log(middle(100)); // 50

console.log(number); // 10

/**************************************************************************/

const humus = function(factor) {
	const thing = function(quantity, unity, name) {
		let quantityThing = quantity * factor;
		if (quantityThing > 1) {
			console.log(`${quantityThing} ${unity} ${name}`)
		}
		thing(1, "something", "whatever");
	}
}

/**************************************************************************/

let attack = function(){
	modeAttack.fire("now");
}

if (modoSeguro) {
attack = function() {/* nothing */}
}

/**************************************************************************/

function cuadrado(x){
	return x * x;
}

/**************************************************************************/

console.log("El futuro ", futuro());

function futuro(){
	return "es hoy"
}

/**************************************************************************/

const potencialTwo2 = (base, exponent) => {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}

/**************************************************************************/

const cuadrado1 = (x) => {
	return x * x;
}

const cuadrado2 = x => x * x;

/**************************************************************************/

const carNoise = () => {
	console.log("Bing!");
}

/**************************************************************************/

function sayHi(somebody){
	console.log("Hi " + somebody);
}
sayHi("Josue");
console.log("Goodbye");

/**************************************************************************/

function gallina() {
	return egg();
}

function egg(){
	return gallina();
}

console.log(gallina() + " first"); // ?

/**************************************************************************/

/* 2/12/2022 */