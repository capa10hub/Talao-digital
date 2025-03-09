function calcularTotal(linha) {
    var quantidade = document.getElementById("quantidade" + linha).value;
    var modelo = document.getElementById("modelo" + linha).value;
    
    if (quantidade === "" || modelo === "") {
    document.getElementById("total" + linha).value = "";
    return;
    }
    
    var total = quantidade * modelo;
    document.getElementById("total" + linha).value = total.toFixed(2);
    calcularTotalGeral();
}

function calcularTotalGeral() {
    var totalGeral = 0;
    for (var i = 1; i <= 5; i++) {
    totalGeral += parseFloat(document.getElementById("total" + i).value) || 0;
    }
    document.getElementById("total-geral").value = "R$ " + totalGeral.toFixed(2);
}

for (var i = 1; i <= 5; i++) {
    document.getElementById("quantidade" + i).onchange = function() {
    calcularTotal(this.id.replace("quantidade", ""));
    };
    document.getElementById("modelo" + i).onchange = function() {
    calcularTotal(this.id.replace("modelo", ""));
    };
}


