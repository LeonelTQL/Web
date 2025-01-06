/************************************* 
 * Funciones
 *************************************/

//Funciones declaradas

function miFunction(a,b){
    console.log('Suma: ' + (a + b));

}


miFunction(1,2);


//utilizando return

function miFunction2(a,b){
    return a + b;

}

let resultado = miFunction2(2,2);
console.log(resultado);

//FUnciones de tipo expresion
//declaracion de un funcion de tipo expresion

let sumar = function(a,b){return a + b};
//llamada a la funcion de tipo expresion
console.log(sumar(5,2));


//Funciones de tipo self-invoking
//funciones que se invocan a si mismas
//Funciones anonimas
//Nota: se pueden utilizar estas funciones cuando se carga un programa
//no es comun pero se puede utilizar en ciertos casos

(function(a,b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(3,4);


function total(x,y){
    console.log(arguments.length);
    return x + y;
}
total(2,3);


//Funciones tipo flecha en js (arrow functions)

const multiplicar= (a,b) => a * b;
console.log(multiplicar(3,4));

const cuadrado = x => x * x;
console.log(cuadrado(3));

//Funcion anonima
//es una funcion que no tiene nombre, comunmente usada como argumento de otra funcion

setTimeout(function(){
    console.log('Hola mundo');
}, 1000);


//operaciones dentro de funciones flecha

const operaciones = {suma:(a,b) => a + b};

console.log(operaciones.suma?.(3,4));
console.log(operaciones.resta?.(3,4));

