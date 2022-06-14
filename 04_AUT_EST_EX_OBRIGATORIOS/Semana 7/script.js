function somar() {
    let quantidade = document.querySelector("#quantidadeProduto")
    quantidade.value = Number(quantidade.value) + 1
}

function subtrair() {
    let quantidade = document.querySelector("#quantidadeProduto")
    quantidade.value = Number(quantidade.value) - 1
}

function trocar() {
    let texto1 = document.querySelector('#texto1').value
    let texto2 = document.querySelector('#texto2').value
    document.querySelector('#texto1').value = texto2
    document.querySelector('#texto2').value = texto1
}

function validar() {
    let telefone = document.querySelector('#telefone').value
    let validCharacters = []
    let areNumbers = false

    for(char of telefone) {
        if(["(", ")", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)) {
            validCharacters.push(char)
        }
    }

    if (validCharacters.length == 14) {
        areNumbers = true
    } else {
        areNumbers = false
    }

    if(telefone.trim()[0] == '(' && telefone.trim()[3] == ')' && telefone.trim().length == 14 && telefone.trim()[9] == '-' && areNumbers == true) {
        document.querySelector('#checkFormat').innerHTML = 'O formato está valido.'
    } else {
        document.querySelector('#checkFormat').innerHTML = 'O formato está inválido. <br> Escreva o número no formato (XX)XXXXX-XXXX .'
    }
}

function calcularTotal() {
    let pessoas = parseInt(document.querySelector("#numeroPessoas").value)
    let checked = ''
    let total = 0
    document.querySelector('#noturno').checked ? checked = 'noturno' : checked = 'diurno'

    if(pessoas > 50) {
        if(checked == 'diurno') {
            total = pessoas * 120
        } else {
            total = pessoas * 80
        }
        document.querySelector('#resultado').innerHTML = `Total: R$${total},00`
    } else {
        if(checked == 'diurno') {
            total = pessoas * 200
        } else {
            total = pessoas * 100
        }
        document.querySelector('#resultado').innerHTML = `Total: R$${total},00`
    }
}

function gerarCampos() {
    let i = 0
    while(i < parseInt(document.querySelector('#numeroAlunos').value)) {
        let input_prova = document.createElement("input")
        input_prova.id = `prova${i+1}`
        input_prova.placeholder = `Nota da prova do aluno ${i + 1}`

        let input_trabalho = document.createElement("input")
        input_trabalho.id = `trabalho${i+1}`
        input_trabalho.placeholder = `Nota do trabalho do aluno ${i + 1}`

        let label = document.createElement("h2")
        label.textContent = `Aluno${i + 1}`

        let div = document.createElement("div")
        div.id = `aluno${i+1}`

        document.querySelector("#inputs").appendChild(div)

        document.querySelector(`#${div.id}`).appendChild(label)
        document.querySelector(`#${div.id}`).appendChild(input_prova)
        document.querySelector(`#${div.id}`).appendChild(input_trabalho)

        i += 1
    }

    let button = document.createElement("button")
    button.textContent = "Calcular"
    button.onclick = calcular
    document.querySelector("#exercicio5").appendChild(button)
}

function calcular() {
    let medias = []
    for(let i = 0; i < parseInt(document.querySelector("#numeroAlunos").value); i++) {
        let media = (((parseInt(document.querySelector(`#prova${i+1}`).value) * 2) + ((parseInt(document.querySelector(`#trabalho${i+1}`).value) * 3)))/(3+2))

        medias.push(media)

        let mostrarMedia = document.createElement("p")
        mostrarMedia.textContent = `A média do aluno ${i + 1} é igual a ${media.toFixed(2)}`
        document.querySelector(`#aluno${i+1}`).appendChild(mostrarMedia)
    }

    console.log('acabou o primeiro for')

    let notasProva = []
    let notasTrabalho = []

    for(let i = 0; i < parseInt(document.querySelector("#numeroAlunos").value); i++) {
        notasProva.push(parseInt(document.querySelector(`#prova${i+1}`).value))
        notasTrabalho.push(parseInt(document.querySelector(`#trabalho${i+1}`).value))
    }

    let somaProvas = 0
    let somaTrabalhos = 0
    let somaMedias = 0

    for(let i = 0; i < notasProva.length; i++) {
        somaProvas += notasProva[i]
        somaTrabalhos += notasTrabalho[i]
        somaMedias += medias[i]
    }

    console.log(notasProva)
    console.log(Math.max(...notasProva))

    let mostrarInfos = document.createElement("p")
    mostrarInfos.innerHTML = `
            Média geral: ${(somaMedias/medias.length).toFixed(2)} <br>
            Média provas: ${(somaProvas/notasProva.length).toFixed(2)} <br>
            Média trabalhos: ${(somaTrabalhos/notasTrabalho.length).toFixed(2)} <br>
            Maior nota de prova: ${Math.max(...notasProva)} <br>
            Menor nota de prova: ${Math.min(...notasProva)} <br>
            Maior nota de trabalho: ${Math.max(...notasTrabalho)} <br>
            Menor nota de trabalho: ${Math.min(...notasTrabalho)}
        `
    document.querySelector("#exercicio5").appendChild(mostrarInfos)
}

