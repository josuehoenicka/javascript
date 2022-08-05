/* Consigna aqui */

// MI RESOLUCIÓN

let par = [2, 4, 6, 8, 10];
let impar = [1, 3, 5, 7, 9];
let columnBlack = "#" + " " + "#" + " " + "#" + " " + "#" + " ";
let columnWhite = " " + "#" + " " + "#" + " " + "#" + " " + "#";

for (i = 0; i <= 8; i++){
    if (i == par){
        console.log(columnWhite);
    }
    else if (i == impar){
        console.log(columnBlack);
    }
}