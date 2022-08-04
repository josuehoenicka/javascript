/*

Escriba un ciclo que haga siete llamada a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######

*/

// MI RESULUCIÓN

let sharp = "#";
for (i= 0; i <= 7; i++) {
    console.log(sharp);
    sharp += sharp;
} 