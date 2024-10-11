let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; 
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " ha sido agregado al carrito. Total de productos: " + cart.length);
}

function viewCart() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("Productos en el carrito: " + cart.join(", "));
    }
}
