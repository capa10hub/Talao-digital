document.addEventListener("DOMContentLoaded", function() {
    for (var i = 1; i <= 6; i++) {
    const quantidade = document.getElementById("quantidade" + i);
    const modelo = document.getElementById("modelo" + i);
    const unidade = document.getElementById("unidade" + i);
    const total = document.getElementById("total" + i);

    modelo.addEventListener("change", function() {
        const valorUnidade = parseFloat(modelo.value);
        unidade.value = valorUnidade.toFixed(2);
        total.value = (quantidade.value * valorUnidade).toFixed(2);
        calcularTotalGeral();
    });

    quantidade.addEventListener("input", function() {
        const valorUnidade = parseFloat(modelo.value);
        total.value = (quantidade.value * valorUnidade).toFixed(2);
        calcularTotalGeral();
    });
    }

    function calcularTotalGeral() {
    let totalGeral = 0;
    for (var i = 1; i <= 6; i++) {
        const total = document.getElementById("total" + i);
        if (total.value !== "") {
        totalGeral += parseFloat(total.value);
        }
    }
    document.getElementById("totalGeral").value = totalGeral.toFixed(2);
    }
});