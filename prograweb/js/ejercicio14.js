function convertir() {

    var entrada = document.getElementById("inputNumeros").value.trim();

    
    if (entrada === "") {
        alert("Por favor, ingresa números válidos. El campo no puede estar vacío.");
        return; 
    }

    
    let arregloCadenas = entrada.split(",");

 
    let numeros = arregloCadenas.map(Number);

    
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            alert("Por favor, ingresa únicamente números separados por comas.");
            return;
        }
    }


    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    
    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;

    
    document.getElementById("txtMayor").value = maximo;
    document.getElementById("txtMenor").value = minimo;
    
    
    document.getElementById("txtPromedio").value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
}
