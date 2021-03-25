/* 
Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while
*/

// var size = 5;
// var sum = 0;

// // for(var i = 1; i <= size; i++) {
// //     var number = parseInt( prompt("Inserisci numero " + i + " di " + size) );
// //     sum += number;
// // }

// var count = 1;
// while (count <= size) {
//     var number = parseInt( prompt("Inserisci numero " + count + " di " + size) );
//     sum += number;
//     count++;
// }

// console.log(sum);

/* 
Snack 2
Inserisci un numero, 
se è pari stampa il numero, 
se è dispari stampa il numero successivo
*/

// var number = parseInt( prompt("Inserisci un numero") );
// if(number % 2 === 0) {
//     console.log(number);
// } else {
//     console.log(number + 1);
// }

/* 
Snack 3
Generatore di “nomi cognomi” casuali: 
prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/

// var firstNames = ["Andrea", "Luca", "Stefano", "Paolo", "Claudio", "Gianluca"];
// var lastNames = ["Bianchi", "Verdi", "Rossi", "Neri", "Baronchelli", "Brambilla"];
// var invitati = [];

// for(var i=0; i < 3; i++) {
//     invitati.push( firstNames [Math.floor(Math.random() * firstNames.length)] + " " + lastNames [Math.floor(Math.random() * lastNames.length)] );
// }

// console.log(invitati);

/* 
Snack 4
Crea un array di numeri interi e 
fai la somma di tutti gli elementi che sono in posizione dispari
*/

// var numbers = [1, 14, 123, 5634, 13412, 66356, 1413242];
// var sum = 0;

// for(var i=0; i < numbers.length; i++) {
//     if(i % 2 !== 0) {
//         sum += numbers[i];
//     }
// }

// console.log(sum);


/* 
Snack 5 - Bonus
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi 
fino a quando ne avrà tanti quanti l’altro.
*/

var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 2];

if(array1.length > array2.length) {
    while(array1.length < array2.length) {
        array2.push( Math.floor(Math.random() * 10) );
    }
} else {
    while(array1.length > array2.length) {
        array1.push( Math.floor(Math.random() * 10) );
    }
}

console.log(array1, array2);