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

////////////////////////////////////////////////////////////////////////////////

function input(Original) {
    Original.replace(/x/gi, "X"); // Trasforma da x a X
    Original.replace(/X2/g, "X²"); // Trasforma i 2 dei coefficenti della x da 2 a ²
    Original.replace(/ /g, ""); // Toglie tutti gli spazi

    return Original;
}

////////////////////////////////////////////////////////////////////////////////

function output(Ris) {
    if (Ris[0].equals("Imppossibile"))
        document.getElementById('result').innnerHTML = "L'equazione e' impossibile";
    else
        document.getElementById('result').innnerHTML = "X<small>1</small> = " + Ris[0] + "\tX<small>2</small> = " + Ris[1];
}

////////////////////////////////////////////////////////////////////////////////
