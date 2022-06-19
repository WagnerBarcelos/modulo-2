function submit() {
    let number = String(parseInt(document.getElementById("number").value));
    console.log(number.charAt(number.length - 3));
    let hundred = parseInt(number.charAt(number.length - 3));

    if (hundred % 2 == 0) {
        document.getElementById("result").innerHTML = "Par";
    }
    else {
        document.getElementById("result").innerHTML = "Ímpar";
    }
}