//Arreglos

const arreglo = [1,2,3,4,5,6,7,8,9,10]; //mas comun
const arreglo2 = new Array(1,2 , 3, 4, 5); 
const arreglo3 = Array.of(1,2,3,4,5);

let numeros = [1,2,3,4,5];

let colores = ['Rojo', 'Verde', 'Azul'];
let voidArray = [];
let conjunto = [{nombre: 'Juan', edad: 22}, {color : 'Rojo'}];

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videojuegos[1]);

let arreglosCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function () {},
    () => {},
    { a: 1 }
];
console.log(arreglosCosas);
console.log(arreglosCosas[1]);

//map, filter y el reduce

//son metodos funcionales que se puede usar para recorrer y ademas transformar los datos de un arreglo

//map
//Trasforma los datos de un arreglo


let numeros2 = [2,3,4,5,6];
let cuadrados = numeros2.map((numero) => numero * numero);
console.log(cuadrados);


//filter
//filtra los datos de un arreglo

let numeropares = [2,3,4,5,6,7,8,9,10];
let pares = numeropares.filter((numero) => numero % 2 == 0);
console.log(pares);

//reduce
//reduce los datos de un arreglo a un solo valor

let numeros4 = [1, 2, 3, 4, 5];
let maximo = numeros4.reduce((acumulador, num) => num > acumulador ? num : acumulador, 0);
console.log(maximo);

//Ventajas
//son ideales para trabajar con transformaciones y manipulaciones de datos
//permiten un estilo de programacion funcional mas limpio y facil de usar
