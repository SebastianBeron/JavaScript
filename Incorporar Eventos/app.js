//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//cart
let cart = [];

//create products
class Products {
    constructor(id, title, price, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    toString() {
        return `${this.id}. ${this.title}, ${this.price} $`;
    }
}

const productsData = [];
productsData.push(new Products(1, "Mila not pollo", 1250, "images/product-1.jpg"));
productsData.push(new Products(2, "Mila not carne", 1250, "images/product-2.jpg"));
productsData.push(new Products(3, "Papas fritas", 800, "images/product-3.jpg"));
productsData.push(new Products(4, "Ensalada", 800, "images/product-4.jpg"));
productsData.push(new Products(5, "Puré de papas", 800, "images/product-5.jpg"));
productsData.push(new Products(6, "Limonada", 600, "images/product-6.jpg"));
productsData.push(new Products(7, "Cerveza", 600, "images/product-7.jpg"));
productsData.push(new Products(8, "Gaseosa", 400, "images/product-8.jpg"));



//display products
for (const product of productsData) {
    let displayProducts = document.createElement("article");
    displayProducts.className = "product";
    displayProducts.innerHTML = `
    <div class="img-container">
        <img src=${product.image} alt="Producto" class="product-img">
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            Agregar al carrito
        </button>
    </div>
    <h3>${product.title}</h3>
    <h4>${product.price} $</h4>
    `
    productsDOM.appendChild(displayProducts);
}

//show cart
cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("transparent-bcg");
    cartDOM.classList.add("show-cart");
});

//hide cart
closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("transparent-bcg");
    cartDOM.classList.remove("show-cart");
});

//add to cart
const bagBtn = [...document.querySelectorAll(".bag-btn")];

bagBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        cartOverlay.classList.add("transparent-bcg");
        cartDOM.classList.add("show-cart");
    });   
}); 

bagBtn.forEach(btn => {
    let id = btn.dataset.id;
    let inCart = cart.find(item => item.id === id);
    if (inCart) {
        btn.innerText = "Agregado";
        btn.disabled = true;
    } else {
        btn.addEventListener("click", e => {
            e.target.innerText = "Agregado";
            e.target.disabled = true;
        });
    }
});
/* 
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
} */