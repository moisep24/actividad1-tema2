function convertir() {
  
    var pesos = document.getElementById("pesos").value;

  
    if (pesos === "" || isNaN(pesos)) {
        alert("Por favor, ingresa un número válido.");
        return; 
    }


    var ars = parseFloat(pesos);

    
    var dolares = ars * 0.0055;  

    
    document.getElementById("dolares").value = dolares.toFixed(2) + " USD";
}