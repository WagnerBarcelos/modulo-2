function submit() {
    let array = [document.getElementById("name1").value, document.getElementById("name2").value, document.getElementById("name3").value]
    array.sort();
    document.getElementById("result").innerHTML = array.join(", ");
}