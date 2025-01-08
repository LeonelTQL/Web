/******************************************************
 * Objetos
 ****************************************************/

//Caracteristicas principales de los objetos en JavaScript

//Claves  y valores:
//Los valores pueden ser de cualquier tipo de dato: string, number, boolean, array, objeto, funcion, etc.

//Dinámicos:
//Los objetos pueden modificar su estructura en tiempo de ejecución (agregar, eliminar o modificar propiedades).

//Metodos:
//Los metodos son funciones asociadas a un objeto.


//Propiedades  y Metodos

//Declaracion de un objeto.

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperes@mail.com',
    edad: 25
};

console.log(persona);

//Metodos en el Objeto

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
    direccion: 'Quito',
    email: 'claral@mail.com',
    edad: 30,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
};

console.log(persona2.nombreCompleto());


const persona3 = {
    nombre: 'Maria',
    edad: 30,
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
};

persona3.saludar();


//Crear un Objeto usando la funcion constructora
//otra forma de crear un objeto vacio y agregarle propiedades despues;

const persona4 = new Object(); //crea un objeto vacio

persona4.nombre = 'Juan';
persona4.edad = 25;
persona4.direccion = 'Quito';
persona4.tel = '0987654321';
persona4.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre}`);
};

console.log(persona4.nombre);
persona4.saludar();


//Usando la clase Object.create()
//Que permite crear un objeto basado en un prototipo

const prototipoPersona = {  
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
};

const persona5 = Object.create(prototipoPersona);
persona5.nombre = 'Mar';

persona5.saludar();


//Usando clases
//proporciona una sintaxis mas estructurada para la creacion de objetos JS.

class Persona{
    constructor(nombre, apellido, edad, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

const persona6 = new Persona('Juan', 'Perez', 25, '0996445439');

console.log(persona6);
persona6.saludar();


//Usando funciones constructoras
//Una forma clasica

function Persona2(nombre, apellido, edad, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

const persona7 = new Persona2('Juan', 'Perez', 25, '0996445439');
persona7.saludar();



//Manifular objetos
//1. Agregar propiedades a un objeto
const add = {nombre: 'Juan'};
add.apellido = 'Perez'; //agregar una propiedad al objeto
add.edad = 25;
console.log(add);

//2. Eliminar propiedades de un objeto

delete add.edad;

console.log(add);

//3. iterar un objeto

for(nombrePropiedad in add){
    console.log(nombrePropiedad);
    console.log(add[nombrePropiedad]);
}

for(let clave in add){
    console.log(`${clave}: ${add[clave]}`);
}

//4. Verificar las propiedades de un objeto

console.log('nombre' in add); 
console.log(add.hasOwnProperty('nombre')); 
console.log(add.hasOwnProperty('apellido')); 


//Metodos utiles para trabajr con objetos

//1. Object.keys(objeto)
//Devuelve un array con las claves del objeto

console.log(Object.keys(add));

//2. Object.values(objeto)
//Devuelve un array con los valores del objeto

console.log(Object.values(add));

//3. Object.entries(objeto)
//Devuelve un array con los pares clave-valor

console.log(Object.entries(add));

//4. Object.assign(objeto1, objeto2)
//Copia las propiedades de un objeto a otro

const copiaObjeto = Object.assign({}, add);
console.log(copiaObjeto);

//5. Object.freeze(objeto)
//Evita que se puedan agregar, eliminar o modificar propiedades del objeto

// Object.freeze(add);
// add.nombre = 'Maria';
// console.log(add);

//6. Object.seal(objeto)
//Evita que se puedan agregar o eliminar propiedades del objeto, pero si se pueden modificar

Object.seal(add);
add.nombre = 'Maria';
add.direccion = 'Quito';
console.log(add);


//Nota adcional

//Imprimir valores
let personaArray = Object.values(add);
console.log(personaArray);

let personaString = JSON.stringify(add);
//notacion de objeto en formato JSON, stringify convierte es convertir en cadena las propiedades de un objeto

console.log(personaString);