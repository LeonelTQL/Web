/* Taller 4 */

// Análisis y Desarrollo: Clases en JavaScript para Sistemas Dinámicos



// Objetivo

// Desarrollar un análisis profundo sobre la aplicabilidad y las mejores prácticas del uso de clases en JavaScript, y posteriormente implementar una solución funcional basada en los hallazgos para un problema real de software.



// Instrucciones

// 1. Escenario

// Estás trabajando como desarrollador en una empresa que busca crear una aplicación para administrar la operación de un servicio de transporte urbano inteligente. La plataforma debe gestionar registros de conductores, asignación de vehículos, control de rutas y monitoreo de tiempos de viaje.

// Dado que la solución debe ser escalable, modular y fácil de mantener, la empresa ha decidido explorar la implementación de clases en JavaScript para estructurar el código de manera más efectiva.

// 2. Análisis

// Analizar y responder a las siguientes preguntas para guiar tu desarrollo:

// Abstracción y Modularidad: ¿Cómo estructurarías las clases para representar entidades como conductores, vehículos y rutas? ¿Qué propiedades y métodos serían necesarios para cada clase?

// Encapsulación: ¿Qué propiedades de cada clase deberían mantenerse privadas para proteger la integridad de los datos (por ejemplo, información personal del conductor)?

// Herencia y Extensibilidad: ¿Cómo aprovecharías la herencia para diferenciar entre tipos de usuarios, como conductores regulares y conductores de servicios VIP?

// Escalabilidad: ¿Qué prácticas implementarías para asegurar que el sistema pueda expandirse fácilmente conforme se añadan nuevas funcionalidades?

// 3. Desarrollo

// Implementa una solución funcional en JavaScript que cumpla con los siguientes criterios:



// Definición de Clases:

// Define una clase Conductor con propiedades básicas como nombre, licencia, y métodos como registrarRuta().

// Implementa una clase Vehiculo para gestionar la asignación de vehículos, con propiedades como modelo y placa.

// Herencia:

// Extiende la clase Conductor para crear una clase ConductorVIP con beneficios adicionales como asignarVehiculoPreferido().

// Encapsulación:

// Utiliza propiedades privadas para proteger información sensible del conductor.



// Entrega y Presentación

// Explicación detallada:

// La estructura de las clases creadas y resolución de la actividad.

// Las decisiones clave que tomaste durante el diseño del sistema.

// Reflexión sobre cómo tu solución aborda la modularidad, extensibilidad y seguridad del sistema.

// Documento tipo informe en formato PDF.


// Clase base para representar a un conductor
class Conductor {
    #informacionPersonal; // Propiedad privada para proteger datos sensibles

    constructor(nombre, licencia, informacionPersonal) {
        this.nombre = nombre;
        this.licencia = licencia;
        this.#informacionPersonal = informacionPersonal; 
        this.rutas = []; 
    }

    // Métodos getter y setter para información personal
    getInformacionPersonal() {
        return this.#informacionPersonal;
    }

    setInformacionPersonal(informacionPersonal) {
        this.#informacionPersonal = informacionPersonal;
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`${this.nombre} ha registrado la ruta: ${ruta}.`);
    }

    obtenerRutas() {
        return this.rutas;
    }
}

  // Clase para representar un vehículo
class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignadoA = null; 
    }

    asignarConductor(conductor) {
        this.asignadoA = conductor;
        console.log(`Vehículo ${this.modelo} (${this.placa}) asignado a ${conductor.nombre}.`);
    }

    obtenerConductor() {
        return this.asignadoA;
    }
}

  // Herencia de Conductor para crear un tipo VIP
class ConductorVIP extends Conductor {
    #vehiculoPreferido;

    constructor(nombre, licencia, informacionPersonal) {
        super(nombre, licencia, informacionPersonal);
        this.#vehiculoPreferido = null;
    }


    getVehiculoPreferido() {
        return this.#vehiculoPreferido;
    }

    setVehiculoPreferido(vehiculo) {
        this.#vehiculoPreferido = vehiculo;
        console.log(`${this.nombre} ha asignado su vehículo preferido: ${vehiculo.modelo} (${vehiculo.placa}).`);
    }

    asignarVehiculoPreferido(vehiculo) {
        this.setVehiculoPreferido(vehiculo);
    }

    obtenerVehiculoPreferido() {
        return this.getVehiculoPreferido();
    }
}


const conductor1 = new Conductor("Leonel Tipan", "123456", { direccion: "Calle 123", telefono: "0123-1234" });
const conductorVIP1 = new ConductorVIP("Carolina Villacis", "789012", { direccion: "Av. Real 456", telefono: "123-5678" });

const vehiculo1 = new Vehiculo("Toyota Prius", "ABC-123");
const vehiculo2 = new Vehiculo("Tesla Model S", "XYZ-789");


conductor1.registrarRuta("Ruta 1");
conductorVIP1.registrarRuta("Ruta 2");


vehiculo1.asignarConductor(conductor1);
vehiculo2.asignarConductor(conductorVIP1);


conductorVIP1.asignarVehiculoPreferido(vehiculo2);

// Consultar información
console.log(conductor1.obtenerRutas());
console.log(conductorVIP1.obtenerVehiculoPreferido());
console.log(vehiculo1);
console.log(conductor1);