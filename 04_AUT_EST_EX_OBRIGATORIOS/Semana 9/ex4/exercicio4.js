function submit() {
    let n = Number(document.getElementById("number").value);

    let initial_value = 1;
    let current_value = initial_value;

    let fibonacci = [1, 1]

    for(let i = 2; i < n; i++) {
        current_value =  fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(current_value)
    }

    document.getElementById("result").innerHTML = fibonacci.join(", ")
}