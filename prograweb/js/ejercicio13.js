function convertir() {
  
    var edad = document.getElementById("edad").value;

  
    if (edad === "" || isNaN(edad)) {
        alert("Por favor, ingresa un número válido.");
        return; 
    }


    var ars = parseFloat(edad);

    
    var resultado = ars >= 18 ? "Puede votar" : "No puede votar";

    
    document.getElementById("resultado").value = resultado;
}