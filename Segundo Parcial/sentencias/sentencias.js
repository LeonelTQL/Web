//Sentencias de control

//sentencia if
//sentencia switch


let numero =2;

if(numero ==1){
    console.log("Numero uno");
}else if (numero == 2){
    console.log("Numero dos");
}else{
    console.log("Numero desconocido");
}



//estaciones

let mes = 1;
let estacion;

if (mes == 1 || mes == 2){
    estacion = "Invierno";
}else if (mes == 3 || mes == 4){
    estacion = "Primavera";
} else if(mes == 5 || mes == 6){
    estacion = "Verano";
} else if(mes == 7 || mes == 8){
    estacion = "Otoño";
} else{
    estacion = "Mes incorrecto";
}   

console.log(estacion);


//Eejercio: calculo de hora del dia

// 6 am - 11am = Buenos dias
// 12 pm - 18 pm = Buenas tardes
// 19 pm - 23 pm = Buenas noches
// 0 am - 5 am = Durmiendo

let horaDia = 12/2;
let mensaje;

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias";
}else if(horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas tardes";
}else if(horaDia >= 19 && horaDia <= 23){
    mensaje = "Buenas noches";
}else if (horaDia >= 0 && horaDia <= 5){
    mensaje = "Durmiendo";
}else {
    mensaje = "Hora no valida";
}
console.log(mensaje);

//SIN llaves

if(horaDia >= 6 && horaDia <= 11)
    mensaje = "Buenos dias";
else if(horaDia >= 12 && horaDia <= 18)
    mensaje = "Buenas tardes";
else if(horaDia >= 19 && horaDia <= 23)
    mensaje = "Buenas noches";
else if (horaDia >= 0 && horaDia <= 5)
    mensaje = "Durmiendo";
else 
    mensaje = "Hora no valida";
console.log(mensaje);


//Sentencia switch

let mess = 8;
let estscion= "Estacion desconocida";

switch(mess){
    case 1:
    case 2:
        estscion = "Invierno";
        break;
    case 3:
    case 4:
        estscion = "Primavera";
        break;
    case 5:
    case 6:
        estscion = "Verano";
        break;
    case 7:
    case 8:
        estscion = "Otoño";
        break;
    default:
        estscion = "Estacion desconocida";
        break;
}
console.log(estscion);