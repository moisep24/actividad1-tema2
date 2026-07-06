const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'animate__animated', 'animate__fadeIn');

        const textoContenedor = document.createElement('span');
        textoContenedor.textContent = texto;
        li.appendChild(textoContenedor);

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm fw-bold px-3';
        botonEliminar.textContent = 'Eliminar';
        
        botonEliminar.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);
        
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});