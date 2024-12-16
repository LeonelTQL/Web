var nombre;
var edad;
var altura;

nombre = "Juan";
edad = 25;
altura = 1.75;

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Altura: " + altura);

//var -> global
//let -> local
//const -> constante

//if marca un bloque de instrucciones que se ejecutan si se cumple una condición
//switch evalua una expresión y dependiendo del valor de la expresión ejecuta un bloque de instrucciones
//for se utiliza para repetir un bloque de instrucciones un número determinado de veces
//while se utiliza para repetir un bloque de instrucciones mientras una condición sea verdadera

//funtion marca un bloque de instrucciones que se ejecutan cuando se llama a la función
//try se utiliza para probar un bloque de instrucciones en busca de errores
//catch se utiliza para manejar los errores
//return se utiliza para devolver un valor desde una función cuando esta se cumple


//Tipos de saros en JS

//Tipo de dato String

var nombre = "Juan";
console.log(nombre);

//tipo de dato numerico

var edad = 20;
console.log(edad);

//Tipo de dato Objeto object

var objeto = {
    nombre: 'Juan',
    edad: 20,
    altura: 1.75
}

console.log(objeto);

//Tipo de dato Typeof

var var1 = "Juan"
var var2 = false
var var3 = BigInt(123456789);
var var4 = [1,2,3,4,5];
console.log( var1);
console.log(typeof var1);

console.log( var2);
console.log(typeof var2);

console.log( var3);
console.log(typeof var3);

console.log( var4);
console.log(typeof var4);

//Tipo de dato boolean

var bandera = true;

console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function

function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol();
console.log(simbolo);
console.log(typeof simbolo);

//Tipo de dato clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
var variable;
console.log(variable);
console.log(typeof variable);

var x;
console.log(x);
console.log(typeof x);

//Tipo de dato null = ausencia de valor

var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato array
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);


//Tipo de dato con cadenas vacias
var z = '';
console.log(z);
console.log(typeof z);


//Reglas para nombrar variables

let nombreCompleto; //Camel Case
let nombre_completo; //Snake Case
let NombreCompleto; //Pascal Case
let nombrecompleto; //No recomendable

//forma de declarar variables
var a1nombreCompleto;
var $nombreCompleto;
var _nombreCompleto;

//formas incorrectas de declarar variables
//var nombre-completo;
//var #nombreCompleto;
//var 1nombreCompleto;
//var &nombreCompleto;


//Operadores aritmeticos
//Suma
let a = 10;
let b = 5;
let suma = a + b;
console.log(suma);

//Resta
let resta = a - b;
console.log(resta);

//Multiplicacion
let multiplicacion = a * b;
console.log(multiplicacion);

//Division

let division = a / b;
console.log(division);

//Modulo
let modulo = a % b;
console.log(modulo);

//Incremento
let c = 10;
let p;
p = c++;
console.log(c);
console.log(p);

//preincremento
let d = 10;
let m;
m = ++d;
console.log(d);
console.log(m);

//Decremento
let e = 10;
let n;
n = e--;
console.log(e);
console.log(n);

//predecremento
let f = 10;
let o;
o = --f;
console.log(f);
console.log(o);



//Operadores de comparacion
//igualdad
let g = 6;
let h = 5;
console.log(g == h);
//no igualdad
console.log(g != h);
//igualdad estricta
console.log(g === h);
//no igualdad estricta
console.log(g !== h);
//mayor que
console.log(g > h);
//menor que
console.log(g < h);
//mayor o igual que
console.log(g >= h);
//menor o igual que
console.log(g <= h);


let comparacion1 = 10;
let comparacion2 = "10";

let comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

let comparacion4 = comparacion1 === comparacion2;
console.log(comparacion4);

//precedendia de operadores
// 1. ()
// 2. * / %
// 3. + -
// 4. = += -= *= /= %=
// 5. == != === !== > < >= <=
// 6. && ||

let j = 3, q = 2, k = 2;
let dato = (j+q)*k;
console.log(dato);

let l = 6, r = 7, t = 8, u = 9;
let dato2 = l*(t+r);
console.log(dato2);

let dato3 = l*r+t/u;
console.log(dato3);

//operadores de asignacion
//asignacion
let w = 3;
let w1 = 3;
let  w2= 3;
let w3 = 3;
let w4 = 3;


console.log(w);
//suma
w += 3; //w = w + 3
console.log(w);

//resta
w1 -= 3; //w1 = w1 - 3
console.log(w1);

//multiplicacion
w2 *= 3; //w2 = w2 * 3
console.log(w2);

//division
w3 /= 3; //w3 = w3 / 3
console.log(w3);

//modulo
w4 %= 3; //w4 = w4 % 3
console.log(w4);


//Determinar si un numero es par o impar
let numero = 9;
if(numero % 2 == 0){
    console.log("El numero es par");
}
else{
    console.log("El numero es impar");
}

//Determinar si un persona es mayor o no de edad

let edadPersona = 17;
let mayorEdad = 18;
if(edadPersona >= mayorEdad){
    console.log("Es mayor de edad");
}
else{
    console.log("Es menor de edad");
}

//Operadores logicos
//AND
let and = true && false;
console.log(and);
//OR
let or = true || false;
console.log(or);
//NOT
let not = !true;
console.log(not);


//AND
let s = 12;
let valMin = 0; valMax = 10;

if(s >= valMin && s <= valMax){
    console.log("Dentro del rango");
}
else{    
    console.log("Fuera del rango");
}

//OR
if(s >= valMin || s <= valMax){
    console.log("Dentro del rango");
}
else{    
    console.log("Fuera del rango");
}
 //Ternaio

 let resultado = (s >= valMin && s <= valMax) ? "Dentro del rango" : "Fuera del rango";

 //conversion de tipos
 let minumero = "10.9";

console.log(typeof minumero);

let edad1 = parseInt(minumero); //convierte a entero
let edad2 = Number(minumero); //convierte a decimal

console.log(edad1); 
console.log(edad2);

if(edad1 >= 18){
    console.log("Puede votar");
}
else{
    console.log("No puede votar");
}

console.log(parseInt("42px")); //convierte unicamente la parte numerica
console.log(parseInt("3.1415")); //convierte entero
console.log(parseInt("abc")); //no se puede convertir

console.log(Number("42px")); //no se puede convertir
console.log(Number("3.1415")); //convierte a decimal
console.log(Number("abc")); //no se puede convertir

console.log(Number(true)); 
console.log(Number(false)); 
console.log(Number(null));
console.log(Number(undefined));