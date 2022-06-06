function ordenar() {
    var resultado = ""
    var lista = document.querySelector("#numeros").value;
    var arrayLista = lista.split(",")
    
    arrayLista.sort(
        function (a, b) {
        return a - b;
    });
    
    for (i = 0; i != arrayLista.length; i++) {
        resultado += " " + arrayLista[i];
    }

    var posicao_do_numero = document.querySelector("#posicao_do_numero").value;
    var i
    var j
    var focoPosicao = 1
    for (j = 0; posicao_do_numero != arrayLista[j]; j++) {
        focoPosicao++
    }
    document.getElementById("resposta_1").innerHTML = `A sequencia ordenada é ${resultado}`;
    document.getElementById("resposta_2").innerHTML = `O número escolhido está na posição ${focoPosicao}`;
}