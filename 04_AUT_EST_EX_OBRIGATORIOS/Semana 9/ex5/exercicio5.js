function submit() {
    let initial = Number(document.getElementById("number1").value);
    let final = Number(document.getElementById("number2").value);

    let primes = '';

    for(let number = initial; number <= final; number++) {
        if(isPrime(number)) {
            primes += number + " ";
        }
    }

    document.getElementById("result").innerHTML = primes;
}

function isPrime(number) {
    for(let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}