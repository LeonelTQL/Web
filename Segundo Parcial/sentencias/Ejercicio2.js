//Crear una funcion declarada llamada calcularPromedio que reciba 3 numeros como parametros y retorne su promedio

function calcularPromedio(a,b,c){
    return (a + b + c) / 3;
}


//Declara una funcion expresada llamada determinarMayor que reciba dos numeros como parametros y retorne el mayor de ellos

let determinarMayor = function(a,b){ return a > b ? a : b;};

//Crea una funcion flecha llamada esPar que reciba un numero y retorne true si es numero es par y false si no lo es.

const esPar = (numero) => numero % 2 == 0;

/*
Escribe un funcion anonima autoejecutable que:

Llame a las funciones anteriores (calcularPromedio, determinarMayor y esPar)
use valores de ejemplo y muestre los resultados en la consola

Reto: Agrega validaciones para asegurarte de que los paramateros son numeros antes 
de realizar las operaciones

Si algun parametro no es un numero, muestra un mensaje de error en la consola
*/

(function(){
    let a = 2;
    let b = 3;
    let c = 4;

    if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
        console.log('El promedio es: ' + calcularPromedio(a,b,c));
        console.log('El mayor entre ' + a + ' y ' + b + ' es: ' + determinarMayor(a, b));
        console.log('Es par: ' + esPar(a));
    }else{
        console.log('Los parametros no son numeros');
    }
})();