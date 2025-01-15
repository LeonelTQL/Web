class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio > 0 ? precio : 'Precio no válido';
        this._categoria = categoria;
        this._stock = stock > 0 ? stock : 'El stock no puede ser negativo';
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock > 0 ? stock : 'El stock no puede ser negativo';
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio > 0 ? precio : 'Precio no válido';
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}$, categoría: ${this._categoria}, stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto, cantidad) {
            if (this._productos.length < Orden.MAX_PRODUCTOS) {
                if (producto.stock >= cantidad) {
                    producto.stock -= cantidad;
                    this._productos.push({ producto, cantidad });
                } else {
                    console.log('No hay suficiente stock para agregar el producto');
                }
            } else {
                console.log('No se pueden agregar más productos a la orden');
            }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let item of this._productos) {
            let precio = item.producto.precio;
            if (item.producto.categoria === 'Electronica') {
                precio *= 0.9; 
            }
            totalVenta += precio * item.cantidad;
        }
        return totalVenta;
    }

    calcularImpuestos() {
        const total = this.calcularTotal();
        return total * 0.15; 
    }

    mostrarOrden() {
        const productosOrdenados = [...this._productos].sort((a, b) => b.producto.precio - a.producto.precio);
    
        let productosOrden = '';
        for (let item of productosOrdenados) {
            productosOrden += `${item.producto.toString()} (cantidad: ${item.cantidad})\n`;
        }
    
        const subTotal = this.calcularTotal();
        const impuestos = this.calcularImpuestos();
        const total = subTotal + impuestos;
    
        console.log(`Orden: ${this._idOrden}\nProductos:\n${productosOrden}Sub Total: ${subTotal}$\nImpuestos: ${impuestos}$\nTotal: ${total}$`);
    }
    

}

let producto1 = new Producto('Camisa', 20, 'Ropa', 50);
let producto2 = new Producto('Pantalon', 30, 'Ropa', 40);
let producto3 = new Producto('Zapatillas', 40, 'Ropa', 30);
let producto4 = new Producto('Calcetines', 5, 'Ropa', 100);
let producto5 = new Producto('Gorra', 10, 'Ropa', 60);
let producto6 = new Producto('Audifonos', 30, 'Electronica', 20);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto6.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1, 2);
orden1.agregarProducto(producto2, 1);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto3, 1);
orden2.agregarProducto(producto4, 10);
orden2.agregarProducto(producto5, 5);
orden2.agregarProducto(producto6, 2);
orden2.mostrarOrden();



//Stock disminuya al realizar una venta

//Descuento por Categoria
//Crear una prpoiedad categoria en la clase producto
//los productos de la categoria electronica de tener un descuento del 10 % a calcular el total de su venta

//Implementar un metodo calcularImpuestos()

//Listar productos por precio descendente

//Asegurarse que los precios no puedan ser negativos al establecerlos en la clase producto

