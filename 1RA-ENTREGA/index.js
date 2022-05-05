class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre ;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.nombre},$ ${this.precio}`;
    }
} 

const arrayProductos = [];
arrayProductos.push(new Producto(1, "Mila not pollo", 1250));
arrayProductos.push(new Producto(2, "Mila not carne", 1250));
arrayProductos.push(new Producto(3, "Papas fritas", 800));
arrayProductos.push(new Producto(4, "Ensalada", 800));
arrayProductos.push(new Producto(5, "Puré de papas", 800));
arrayProductos.push(new Producto(6, "Limonada", 600));
arrayProductos.push(new Producto(7, "Cerveza", 600));
arrayProductos.push(new Producto(8, "Gaseosa", 400));

const mensaje = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Ingresá el Nº del producto que querés comprar: ");
    for (let i = 0; i < listaProductos.length; i++){
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("Para finalizar tu compra ingresá el Nº 0.");
    return auxMensaje.join("\n");
}

let elegirProductos; 
let buscarProducto;
const carrito = [];
let precio = 0;


elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

while ((elegirProductos > 0) && (elegirProductos <= arrayProductos.length) && (!isNaN(elegirProductos))) {
    buscarProducto = arrayProductos.find((el) => el.id === elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(arrayProductos)));
}

if (carrito.length > 0) {
    carrito.forEach((el) => (precio += el.precio));
    alert(`Usted seleccionó: \n${carrito.join("\n")} \nEl total a abonar es: $ ${precio}`);
} else {
    alert("¡No seleccionaste nada!");
}