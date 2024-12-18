// Arreglo inicial de estudiantes
const estudiantes = [
    { nombre: "Juan", calificaciones: [12, 15, 14] },
    { nombre: "Ana", calificaciones: [8, 9, 10] },
    { nombre: "Luis", calificaciones: [16, 17, 18] },
    { nombre: "Sofia", calificaciones: [20, 7, 5] },
    { nombre: "Carlos", calificaciones: [11, 12, 10] },
    { nombre: "Marta", calificaciones: [14, 13, 15] },
    { nombre: "Pedro", calificaciones: [9, 8, 10] },
    { nombre: "Laura", calificaciones: [18.6, 17, 19] },
    { nombre: "Jorge", calificaciones: [13, 14, 12] },
    { nombre: "Clara", calificaciones: [10, 9, 8] }
];



// Función para calcular el promedio de un estudiante
function calcularPromedio(calificaciones) {
    if (calificaciones.length === 0) return 0; 
    return calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length;
}

// Clasificación por promedio
function clasificarPromedio(promedio) {
    if (promedio >= 16) {
        return "Excelente";
    } else if (promedio >= 12) {
        return "Bueno";
    } else if (promedio >= 8) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

// Mostrar resultados
function mostrarResultados(estudiantes) {
    console.log("Resultados de los estudiantes:");
    for (const estudiante of estudiantes) {
        console.log(estudiante.nombre + ":");
        let calificacionesStr = "";
        for (let i = 0; i < estudiante.calificaciones.length; i++) {
            calificacionesStr += estudiante.calificaciones[i];
            if (i < estudiante.calificaciones.length - 1) {
                calificacionesStr += ", ";
            }
        }
        console.log("Clasificación: " + estudiante.clasificacion);
        console.log("Promedio: " + Math.round(estudiante.promedio * 100) / 100);
        console.log("Calificacion mas alta: " + estudiante.maximo);
        console.log("Calificacion mas baja: " + estudiante.minimo);
        console.log("--------------------");
    }
}

function generarEstadisticas(estudiantes) {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes en la lista.");
        return;
    }

    let mejorPromedio = calcularPromedio(estudiantes[0].calificaciones);
    let peorPromedio = calcularPromedio(estudiantes[0].calificaciones);
    let estudianteMejorPromedio = estudiantes[0].nombre;
    let estudiantePeorPromedio = estudiantes[0].nombre;

    for (const estudiante of estudiantes) {
        const { calificaciones } = estudiante;
        const promedio = calcularPromedio(calificaciones);
        const maxCalificacion = calificaciones.reduce((acc, num) => num > acc ? num : acc, calificaciones[0]);
        const minCalificacion = calificaciones.reduce((acc, num) => num < acc ? num : acc, calificaciones[0]);

        estudiante.promedio = promedio;
        estudiante.clasificacion = clasificarPromedio(promedio);
        estudiante.maximo = maxCalificacion;
        estudiante.minimo = minCalificacion;

        if (promedio > mejorPromedio) {
            mejorPromedio = promedio;
            estudianteMejorPromedio = estudiante.nombre;
        }

        if (promedio < peorPromedio) {
            peorPromedio = promedio;
            estudiantePeorPromedio = estudiante.nombre;
        }
    }

    console.log("Estudiante con mejor promedio: " + estudianteMejorPromedio + " (" + Math.round(mejorPromedio * 100) / 100 + ")");
    console.log("Estudiante con peor promedio: " + estudiantePeorPromedio + " (" + Math.round(peorPromedio * 100) / 100 + ")");
    console.log("--------------------");
}



// Generar estadísticas y mostrar resultados
generarEstadisticas(estudiantes);
mostrarResultados(estudiantes);
