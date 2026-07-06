function convertir() {
  
    var kilometros = document.getElementById("kilometros").value;

  
    if (kilometros === "" || isNaN(kilometros)) {
        alert("Por favor, ingresa un número válido.");
        return; 
    }


    var km = parseFloat(kilometros);

    // la formula , creo
    var millas = km * 0.621371;

    
    document.getElementById("millas").value = millas.toFixed(2) + " mi";
}
    