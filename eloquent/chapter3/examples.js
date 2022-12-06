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

fuction testNumber(x){
	return x * x;
}
console.log(testNumber(4, true, "hi")); // 16

/**************************************************************************/

function minus(n1, n2){
	if (n2 === undefined) {
		return -a;
	} else {
		return a - b;
	}
}
console.log(10); // -10
console.log(100, 50); // 50

/**************************************************************************/

function numberPotencial(number, exponent = 2){
	let result = 1;
	for (let i = 0; i < exponent; i++){
		result *= number;
	}
	return result;
}
console.log(numberPotencial(9)); // 81
console.log(numberPotencial(5, 4)) // 625

/**************************************************************************/

function enVolverValor(n) {
	let local = n;
	return () => local;
}
let envolver1 = enVolverValor(1);
let envolver2 = enVolverValor(2);
console.log(envolver1()); // 1
console.log(envolver2()); // 2

/**************************************************************************/

function multiplicador(factor){
	return numero => numero * factor;
}
let duplicar = multiplicador(2);
console.log(duplicar(5)); // 10

/**************************************************************************/
/**************************************************************************/
/************************* ... / recursion ********************************/
/**************************************************************************/
/**************************************************************************/

function potencia(base, exponente) {
	if (exponente == 0) {
		return 1;
	} else {
		return base * potencia(base, exponente - 1);
	}
}
console.log(potencia(2, 3)); // 8

/**************************************************************************/

function encontrarSolucion(objetivo){
	function encontrar(actual, historia) {
		if (actual == objetivo) {
			return historia;
		} else if (actual > objetivo) {
			return null;
		} else {
			return encontrar(actual + 5, `(${historia} + 5)`) ||
				   encontrar(actual * 3, `(${historia} * 3)`)
		}
	}
	return encontrar(1, "1");
}
console.log*encontrarSolucion(24); // (((1 * 3) + 5) * 3)

/**************************************************************************/




