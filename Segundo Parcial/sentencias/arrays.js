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



//Agregar nuevos elementos
//push() agrega un elemento al final del arreglo

let agregar = [1,2,3];

agregar.push(4); 
console.log(agregar);

let a =['uno', 'dos', 'tres'];
a.push('cuatro');
console.log(a);

//unshift() agrega un elemento al inicio del arreglo

let agregar2 = [1,2,3];
agregar2.unshift(0);
console.log(agregar2);

//splice() agrega un elemento en la posicion que se le indique

let agregar3 = [1,2,3];
agregar3.splice(1,0,4); //agrega el 4 en la posicion 1 sin borrae los elementos    (posicion, elementos a borrar, elementos a agregar)
console.log(agregar3);


//Modificar elementos de un arreglo

//se puede modificar un elemento de un arreglo accediendo a su posicion a travez de su indice

let modificar = [1,2,3];
let oli = modificar[1] = 10;   
console.log(modificar); //modifica el 2 por 10  

//Si deseamos modificar el arreglo de forma inmutable, podemos usar el metodo map()
//map() devuelve un nuevo arreglo con los elementos modificados

let modificar2 = [1,2,3];
let nuevo = modificar2.map(num => num === 2 ? 5 : num); //modifica el 2 por 5
console.log(nuevo);

//Eliminar elementos de un arreglo
//pop() elimina el ultimo elemento de un arreglo

let eliminar = [1,2,3];
eliminar.pop();
console.log(eliminar);

//shift() elimina el primer elemento de un arreglo

let eliminar2 = [1,2,3];
eliminar2.shift();
console.log(eliminar2);

//splice() elimina un elemento en la posicion que se le indique

let eliminar3 = [1,2,3];
eliminar3.splice(1,1); //elimina el 2 en la posicion 1
console.log(eliminar3);