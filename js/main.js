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
    
}


    // Actualiza el elemento que muestra el total acumulado en el carrito.
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;{
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