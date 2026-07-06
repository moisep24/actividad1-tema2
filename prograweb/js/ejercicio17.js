const inicializarAdministrador = () => {
    const obtenerTareas = () => {
        const datos = localStorage.getItem("tareas_pendientes");
        return datos ? JSON.parse(datos) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem("tareas_pendientes", JSON.stringify(tareas));
    };

    return {
        agregar: (texto) => {
            const tareas = obtenerTareas();
            tareas.push(texto);
            guardarTareas(tareas);
        },
        eliminar: (indice) => {
            const tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarTareas(tareas);
        },
        listar: () => obtenerTareas()
    };
};

const gestor = inicializarAdministrador();

const renderizarTareas = () => {
    const contenedorLista = document.getElementById("lista-tareas");
    contenedorLista.innerHTML = "";
    
    const tareas = gestor.listar();

    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.className = "item-tarea";
        
        li.innerHTML = `
            <span>${tarea}</span>
            <button class="btn-eliminar" onclick="accionEliminar(${indice})">&times;</button>
        `;
        
        contenedorLista.appendChild(li);
    });
};

const accionAgregar = () => {
    const input = document.getElementById("input-tarea");
    const texto = input.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Debes escribir una tarea antes de agregarla.'
        });
        return;
    }

    gestor.agregar(texto);
    input.value = "";
    renderizarTareas();
};

const accionEliminar = (indice) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Esta tarea se eliminará permanentemente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            gestor.eliminar(indice);
            renderizarTareas();
            Swal.fire(
                '¡Eliminada!',
                'La tarea ha sido removida de la lista.',
                'success'
            );
        }
    });
};

window.onload = renderizarTareas;