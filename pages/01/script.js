function sol() {
    var a, b, c, d, x1, x2;

/*--Variabili-----------------------------------------------------------------*/

    a = prompt("Dammi il numero");
    b = prompt("Dammi il numero");
    c = prompt("Dammi il numero");

    d = Math.sqrt(b*b -4*a*c);
    document.getElementById("result").innerHTML = d;

/*--Input---------------------------------------------------------------------*/

    if (isNaN(a) || isNaN(b) || isNaN(c))
        document.getElementById('result').innerHTML = 'Non hai immesso valori validi';
    else {
        if ((a == 0) || (d < 0))
        alert("Impossibile risolvere l'equazione");
        else {
            x1 = (-b + d ) / (a*2);
            x2 = (-b - d ) / (a*2);

            if (isNaN(x1) || isNaN(x2))
                document.getElementById("result").innerHTML = "Impossibile";
            else
                document.getElementById("result").innerHTML=x1 + ", " + x2;
        }
    }

/*--Esecuzione----------------------------------------------------------------*/

}
