function convertir() {
    
    var celsius = document.getElementById("celsius").value;

    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        return; 
    }

    
    var c = parseFloat(celsius);

  
    var fahrenheit = (c * 9/5) + 32;

    
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2) + " °F";
}