document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement;
        const nombre = producto.getAttribute('data-nombre');
        const precio = parseFloat(producto.getAttribute('data-precio'));
        
        agregarAlCarrito(nombre, precio);
    });
});

let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        carritoLista.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('contacto-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje!');
    e.target.reset();
});
