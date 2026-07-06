let listaEstudiantes = [];

function agregarEstudiante() {
    const campoNombre = document.getElementById('input-nombre');
    const campoCalificacion = document.getElementById('input-calificacion');
    
    const nombre = campoNombre.value.trim();
    const calificacion = parseFloat(campoCalificacion.value);

    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }
    
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        alert("Por favor, ingresa una calificación válida entre 0 y 100.");
        return;
    }

    const nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    listaEstudiantes.push(nuevoEstudiante);

    const listaUI = document.getElementById('lista-estudiantes');
    const elementoLista = document.createElement('li');
    elementoLista.textContent = `${nuevoEstudiante.nombre} - Calificación: ${nuevoEstudiante.calificacion}`;
    listaUI.appendChild(elementoLista);

    document.getElementById('total-lista').textContent = listaEstudiantes.length;

    campoNombre.value = "";
    campoCalificacion.value = "";
    campoNombre.focus();
}

function calcularResultados() {
    if (listaEstudiantes.length === 0) {
        alert("Primero debes agregar al menos un estudiante.");
        return;
    }

    const sumaTotal = listaEstudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const promedio = sumaTotal / listaEstudiantes.length;

    const calificacionMaxima = Math.max(...listaEstudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...listaEstudiantes.map(e => e.calificacion));

    const estudianteMasAlto = listaEstudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMasBajo = listaEstudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById('resultado-promedio').value = promedio.toFixed(2);
    document.getElementById('resultado-alta').value = `${estudianteMasAlto.nombre} (${calificacionMaxima})`;
    document.getElementById('resultado-baja').value = `${estudianteMasBajo.nombre} (${calificacionMinima})`;
}