// Clase Inventario
class Inventario {
    constructor() {
        this.productos = [];
    }

    // Agregar un producto al inventario
    agregarProducto(nombre, precio, cantidad, categoria) {
        if (precio > 0 && cantidad > 0) {
            this.productos.push({ nombre, precio, cantidad, categoria });
        } else {
            console.log(`Error: Precio o cantidad no pueden ser menores o iguales a 0 del producto  ${nombre}.`);
            return;
        }
    }

    // Listar productos ordenados por precio
    listarProductos(orden = 'asc') {
        return this.productos.sort((a, b) => 
        orden === 'asc' ? a.precio - b.precio : b.precio - a.precio
        );
    }

    // Filtrar productos por categoría
    filtrarPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    // Aplicar descuento a una categoría
    aplicarDescuento(categoria, porcentaje) {
        const categoriaExiste = this.productos.find(producto => producto.categoria === categoria);
        if (!categoriaExiste) {
            console.log(`Error: Categoria ${categoria} inexistente.`);
            return;
        }
        if (porcentaje > 0 && porcentaje <= 100) {
            for (const producto of this.productos) {
                if (producto.categoria === categoria) {
                    producto.precio -= producto.precio * (porcentaje / 100);
                }
            }
            console.log(`Descuento del ${porcentaje}% aplicado a todos los productos de la categoria ${categoria}.`);
        } else {
            console.log(`Error: ${porcentaje}% de descuento inválido para la categoria ${categoria}, debe estar entre 0 y 100.`);
            return;
        }
    }   
}


// Clase Venta
class Venta {
    constructor() {
        this.ventasRealizadas = [];
        this.totalIngresos = 0;
        this.productosVendidos = {};
    }

    // Realizar una venta
    realizarVenta(inventario, nombreProducto, cantidad) {
        const producto = inventario.productos.find(p => p.nombre === nombreProducto);
    
    if (cantidad > 0) {   
        if (!producto) {
            console.log('Error: Producto inexistente.');
            return;
        }

        if (producto.cantidad < cantidad) {
            console.log('Error: Cantidad insuficiente en inventario.');
            return;
        }

    // Actualizar inventario y registrar la venta
        producto.cantidad -= cantidad;
        const totalVenta = producto.precio * cantidad;
        this.ventasRealizadas.push({
            nombreProducto,
            cantidad,
            totalVenta,
            fecha: new Date()
        });
        this.totalIngresos += totalVenta;
    } else {
        console.log('Error: Cantidad inferior a 0.');
        return;
    }


    // Registrar producto más vendido
    this.productosVendidos[nombreProducto] = (this.productosVendidos[nombreProducto] || 0) + cantidad;

    console.log(`Venta realizada: ${cantidad} unidades de ${nombreProducto}.`);
    }

    // Generar reporte detallado
    generarReporte(inventario) {
        const productoMasVendido = Object.keys(this.productosVendidos).reduce((a, b) => 
        this.productosVendidos[a] > this.productosVendidos[b] ? a : b, null);

    return {
        inventarioActualizado: inventario.productos,
        ventasRealizadas: this.ventasRealizadas,
        totalIngresos: this.totalIngresos,
        productoMasVendido
    };
    }
}

const inventario = new Inventario();
    // Agregar productos al inventario (nombre, precio, cantidad, categoria)
    inventario.agregarProducto('Laptop', 1200, 10, 'Electrónica');
    inventario.agregarProducto('Teclado', 50, 20, 'Electrónica');
    inventario.agregarProducto('Silla', 150, 15, 'Muebles');
    inventario.agregarProducto('Mesa', 300, 5, 'Muebles');
    inventario.agregarProducto('Televisiones', 250, 10, 'Electrónica');
    inventario.agregarProducto('Audifonos', 30, 10, 'Electrónica');
    inventario.agregarProducto('Cama', 200, 10, 'Muebles');
    inventario.agregarProducto('Blusa de mujer', 50, 5, 'Ropa');


    const venta = new Venta();
    // Realizar ventas (nombreProducto, cantidad)
    venta.realizarVenta(inventario, 'Laptop', 2);
    venta.realizarVenta(inventario, 'Silla', 5);
    venta.realizarVenta(inventario, 'Televisiones', 10);
    venta.realizarVenta(inventario, 'Cama', 100);
    venta.realizarVenta(inventario, 'Teclado', -5);
    venta.realizarVenta(inventario, 'Audifonos', 10);

    const reporteAntesdelDescuentos = venta.generarReporte(inventario);
    console.log(reporteAntesdelDescuentos);
    
    //Se puede aplicar un descuento a todos los productos de una categoria que se especifique (categoria, porcentaje de descuento) 
    inventario.aplicarDescuento('Electrónica', 10);
    inventario.aplicarDescuento('Muebles', 15);
    inventario.aplicarDescuento('Ropa', -20);
    inventario.aplicarDescuento('Tomate', 20);

    
    const reporteDepuesdelDescuento = venta.generarReporte(inventario);
    console.log(reporteDepuesdelDescuento);
