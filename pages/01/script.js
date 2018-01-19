function sol(nx2, nx, n) { // Funzione che risolve le equazioni di secondo grado dati i 3 dati in ingresso (nx2 = coefficente di x²; nx = coefficente di x; n = termine noto)
    var Delta, Ris = [];

    if (isNaN(nx2) || isNaN(nx) || isNaN(n)) // Controllo validita' numeri
        throw new TypeError("Valori inseriti non validi");
    else {
        Delta = (nx * nx) - (4 * nx2 * n);

        if ((nx2 == 0) || (Delta < 0)) // Controllo equazione impossibile
            throw new RangeError("Equazione impossibile");
        else {
			Ris[0] = (-nx + Math.sqrt(Delta) ) / (nx2*2);
            Ris[1] = (-nx - Math.sqrt(Delta) ) / (nx2*2); // Risoluzione dei due risultati
        }
    }

	return Ris;
}

/*
function sol() {
    var a, b, c, d, x1, x2;

    a = document.getElementById("inputA").innerHTML;
    b = document.getElementById("inputB").innerHTML;
    c = document.getElementById("inputC").innerHTML;

    d = Math.sqrt(b*b -4*a*c);
    document.getElementById("result").innerHTML = d;

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
}
*/
