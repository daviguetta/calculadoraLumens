var ambientes = document.getElementById('ambiente');
var areaDoAmbiente = document.getElementById('areaDoAmbiente');
var resultado = document.getElementById('resultado');

function calcularLumen() {
    var input = parseFloat(areaDoAmbiente.value) ||0;
    var ambienteSelecionado = ambientes.options[ambientes.selectedIndex].value;

    return (ambienteSelecionado === 'garagem')? input*100 : input*150;
};

function mostrarResultado() {
    resultado.innerHTML = `A iluminância ideal é ${calcularLumen()} lúmens`;
};

areaDoAmbiente.addEventListener('input',mostrarResultado);