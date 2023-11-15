function calc() {
    var p = Number(document.getElementById("prin").value);
    var r = Number(document.getElementById("rate").value) / 100;
    var m = Number(document.getElementById("month").value);
    var y = Number(document.getElementById("years").value);

    var loan = p * ((1 + r / 12) ** (12 * y)) - (m * ((1 + r / 12) ** (12 * y) - 1)) / (r / 12);
    document.getElementById("out").innerHTML = "Your remaining loan balance is: $" + loan.toFixed(2);
}

function reset() {
    document.getElementById("out").innerHTML = "";
}