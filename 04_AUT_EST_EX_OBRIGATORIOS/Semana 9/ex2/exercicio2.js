function submit() {
    let number = Number(document.getElementById("number").value);

    if(number === parseInt(number) && number > 0) {
        let numberString = String(number).split('')

        separatedNumbers = numberString.map(function(element) {
            return Number(element);
        })

        let sum = 0;
        separatedNumbers.forEach(number => {
            sum += number;
        }) 
        document.getElementById("result").innerHTML = sum;
    } else {
        alert("Número não é inteiro e positivo.");
    }
}