function doMath() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = Number(num1);
    num2 = Number(num2);

    var add = num2 + num2;
    var sub = num1 - num2; 
    var mul = num1 * num2;
    var div = num1 / num2;
    var mod = num1 % num2;
    var pow = num1 ** num2;
    var sqn1 = Math.sqrt(num1);
    var sqn2 = Math.sqrt(num2);

    var p = document.getElementById("output");
    var out = "";
    out += "Add: " + add + "<br>";
    out += "Subtract: " + sub + "<br>";
    out += "Multiply: " + mul + "<br>";
    out += "Divide: " + div + "<br>";
    out += "Modulus: " + mod + "<br>";
    out += "Power: " + pow + "<br>";
    out += "Square Root num1: " + sqn1.toFixed(6) + "<br>";
    out += "Square Root num2: " + sqn2.toFixed(6) + "<br>";
    p.innerHTML = out;
}