document.querySelectorAll('.add-to-cart').forEach(button => {
    // Repite sobre cada botón con la clase 'add-to-cart'.
    button.addEventListener('click', () => {
        // Obtiene el elemento padre del botón, que contiene la información del producto.
        const producto = button.parentElement;
        // Extrae el nombre del producto del atributo 'data-nombre'.
        const nombre = producto.getAttribute('data-nombre');
        // Extrae el precio del producto del atributo 'data-precio' y lo convierte a número decimal.
        const precio = parseFloat(producto.getAttribute('data-precio'));
        
        // Llama a la función para agregar el producto al carrito con el nombre y precio.
        agregarAlCarrito(nombre, precio);
    });
});

// Inicializa un array vacío para almacenar los productos del carrito.
let carrito = [];
// Inicializa una variable para almacenar el total del carrito.
let total = 0;

function agregarAlCarrito(nombre, precio) {
    // Añade un objeto con el nombre y precio del producto al array 'carrito'.
    carrito.push({ nombre, precio });
    // Suma el precio del nuevo producto al total acumulado.
    total += precio;
    // Llama a la función para actualizar la visualización del carrito.
    actualizarCarrito();
}

function actualizarCarrito() {
    // Obtiene el elemento de la lista del carrito en el DOM.
    const carritoLista = document.getElementById('carrito-lista');
    // Limpia el contenido de la lista del carrito para evitar duplicados.
    carritoLista.innerHTML = '';

    // Repite  sobre cada producto en el carrito para crear elementos de lista.
    carrito.forEach(item => {
        // Crea un nuevo elemento de lista.
        const li = document.createElement('li');
        // Establece el texto del elemento de lista con el nombre y precio del producto.
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        // Añade el elemento de lista a la lista del carrito en el DOM.
        carritoLista.appendChild(li);
    });

    // Actualiza el elemento que muestra el total acumulado en el carrito.
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Agrega un evento al formulario de contacto para manejar el envío.
document.getElementById('contacto-form').addEventListener('submit', (e) => {
    // Previene el comportamiento predeterminado del formulario (no recargar la página).
    e.preventDefault();
    // Muestra un mensaje de agradecimiento al usuario.
    alert('Gracias por tu mensaje!');
    // Reinicia el formulario para limpiar los campos.
    e.target.reset();
});