//Ciclos

//FOr

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Flash', 'Acuaman'];

console.log('For tradiconal');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//itera propiedades de un obejto o los indices de un arreglo
console.log('For in');
for (let i in heroes) {
    console.log(heroes[i]);
}

//itera los valores de un objeto o arreglo

console.log('For of');
for (let valor of heroes) {
    console.log(valor);
}


//Usa for tradicional si necesitas el indice, es decir su control total
//Usa for in si necesitas las propiedades de un objeto
//Usa for of si necesitas los valores de un objeto o arreglo


//continue, break

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue;
    }
    console.log(contador);
}

// break
for (let contador = 0; contador <= 10; contador++){
    if (contador === 5) {
        break;
    }

    console.log(contador);
}


//While

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

console.warn('While continue');

while(carros[i]){
    if (i === 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}