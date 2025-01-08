// Ejercicio: Gestión de Inventario con Objetos en JavaScript

// Instrucciones

// Una tienda necesita administrar su inventario de productos mediante un programa en JavaScript.

// Cada producto debe tener las propiedades nombre, precio, y cantidad. La tienda requiere las siguientes funcionalidades:



// Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades mencionadas.

// Sella el objeto del inventario: Asegúrate de que no puedan agregarse ni eliminarse productos, pero que sea posible modificar las cantidades y precios.

// Implementa una función para vender un producto:

// La función debe aceptar el nombre del producto y la cantidad a vender.

// Si el producto existe y tiene suficiente stock, reduce la cantidad en el inventario y muestra un mensaje confirmando la venta.

// Si el producto no existe o no tiene suficiente stock, muestra un mensaje de error.

// Implementa una función para aplicar un descuento a todos los productos:

// La función debe aceptar un porcentaje de descuento y reducir el precio de todos los productos en base a este porcentaje.

// Asegúrate de que los precios no sean negativos.

// Usa las funciones creadas:

// Vende algunos productos.

// Aplica un descuento del 10% a todo el inventario.

// Muestra el inventario final utilizando console.log().



// Resultados esperados



// Al vender productos: Se confirma la venta si hay stock suficiente o se muestra un mensaje de error.

// Al aplicar el descuento: Los precios se reducen correctamente sin caer en valores negativos.

// Estado final del inventario: Refleja los cambios en cantidades y precios después de las operaciones.



// Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades mencionadas.

const inventario = {
    producto1: { nombre: "Camiseta", precio: 20, cantidad: 50 },
    producto2: { nombre: "Pantalón", precio: 30, cantidad: 40 },
    producto3: { nombre: "Zapatos", precio: 50, cantidad: 30 },
    producto4: { nombre: "Guantes", precio: 15, cantidad: 20 },
  };
  
  // Sella el objeto del inventario: Asegúrate de que no puedan agregarse ni eliminarse productos, pero que sea posible modificar las cantidades y precios.

  Object.seal(inventario);
  
  // Implementa una función para vender un producto:
  
  function venderProducto(nombre, cantidad) {
    if (cantidad > 0) {
        
        for (const sell in inventario) {
        const producto = inventario[sell];
        if (producto.nombre === nombre) {
            if (producto.cantidad >= cantidad) {
            producto.cantidad -= cantidad;
            console.log(`Venta confirmada: ${cantidad} ${nombre}(s) vendidos.`);
            return;
            } else {
            console.log(`Error: Stock insuficiente para ${nombre}.`);
            return;
            }
        }
        }
        console.log(`Error: Producto ${nombre} no encontrado.`);
    }else{
        console.log("Error: La cantidad no puede ser negativa o igual a cero.");
        return;
      }
  }
  
  // Implementa una función para aplicar un descuento a todos los productos:

  function aplicarDescuento(porcentaje) {
    if (porcentaje > 0 && porcentaje < 100) {
        for (const sell in inventario) {
        const producto = inventario[sell];
        const descuento = producto.precio * (porcentaje / 100);
        producto.precio = producto.precio - descuento;
        }
        console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
    }
    else {
        console.log("Error: El descuento no puede ser negativo o igual a cero.");
        return;
      }
  }
  
  // Usa las funciones creadas:
  venderProducto("Camiseta", 10);
  venderProducto("Zapatos", 40);
  venderProducto("Guantes", 5);
  
  aplicarDescuento(10);
  for (const key in inventario) {
    console.log(`Precio de ${inventario[key].nombre}: ${inventario[key].precio}`);
  }
  
  
  // Mostrar el inventario final
  console.log("Inventario final:", inventario);
  