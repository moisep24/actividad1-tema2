const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const campo1 = document.getElementById('numero1').value.trim();
    const campo2 = document.getElementById('numero2').value.trim();
    const campoResultado = document.getElementById('resultado');

    if (campo1 === "" || campo2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, introduce ambos números para realizar la operación.'
        });
        return;
    }

    const n1 = parseFloat(campo1);
    const n2 = parseFloat(campo2);

    if (isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'Asegúrate de ingresar únicamente números válidos.'
        });
        return;
    }

    let res;

    if (operacion === 'suma') res = sumar(n1, n2);
    if (operacion === 'resta') res = restar(n1, n2);
    if (operacion === 'multiplicacion') res = multiplicar(n1, n2);
    if (operacion === 'division') res = dividir(n1, n2);

    if (typeof res === 'string' && res.startsWith('Error')) {
        Swal.fire({
            icon: 'warning',
            title: 'Operación inválida',
            text: res
        });
        campoResultado.value = "";
    } else {
        campoResultado.value = res;
    }
};