function sol() {
    var a;
    var b;
    var c;

    a = prompt("Dammi il numero");
    b = prompt("Dammi il numero");
    c = prompt("Dammi il numero");

    var d = Math.sqrt(b*b -4*a*c);
    document.getElementById("result").innerHTML = d;

    if (d < 0)
        alert("Impossibile risolvere l'equazione");
    else {
        var x1 = (-b + d ) / (a*2);
        var x2 = (-b - d ) / (a*2);
        document.getElementById("result").innerHTML=x1 + ", " + x2;
    }
}
