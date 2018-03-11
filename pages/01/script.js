function solve(num) { // Funzione che risolve le equazioni di secondo grado dati i 3 dati in ingresso (num[0] = coefficente di x²; num[1] = coefficente di x; num[2] = termine noto)
    var Delta, Ris = [];

    if (isNaN(num[0]) || isNaN(num[1]) || isNaN(num[2])) // Controllo validita' numeri
        Ris[0] = "Impossibile";
    else {
        Delta = (num[1] * num[1]) - (4 * num[0] * num[2]);

        if ((num[0] == 0) || (Delta < 0)) // Controllo equazione impossibile
            Ris[0] = "Impossibile";
        else {
			Ris[0] = (-num[1] + Math.sqrt(Delta)) / (num[0]*2);
            Ris[1] = (-num[1] - Math.sqrt(Delta)) / (num[0]*2); // Risoluzione dei due risultati
        }
    }

	return Ris;
}

////////////////////////////////////////////////////////////////////////////////

function input() { // Trasforma l'input in una forma accettabile dal computer
    var input = document.getElementById('input').value;
    
    input = input.replace(/\s/g, ""); // Toglie tutti gli spazi
    input = input.replace(/X/g, "x"); // Trasforma da X a x
    input = input.replace(/x^2/g, "x²"); // Trasforma i 2 dei coefficenti della x da 2 a ²

    if (!isOperatore(input.charAt(0)) || !isFinite(input.charAt(0)) || !isFinite(input.charAt(1))) { // Mette il più e/o l'1 all'inizio della stringa se non li ha già
        if (!isOperatore(input.charAt(0)) && !isFinite(input.charAt(0)))
            input = "+1" + input;
        else {
            if (!isOperatore(input.charAt(0)))
                input = "+" + input;
            if (!isFinite(input.charAt(1))) {
                input = input.slice(1);
                input = "+1" + input;
            }
        }
    }
    
    return input;
}

////////////////////////////////////////////////////////////////////////////////

function output(Ris) { // Trasforma il risultato in una forma accettabile dall'utente
    if (Ris[0] == "Impossibile" || Ris[1] == "Impossibile") // Controllo eq imposibile
        stampa("L'equazione è impossibile");
    else
        stampa("X<small>1</small> = " + Ris[0] + "<br>X<small>2</small> = " + Ris[1]);
}

////////////////////////////////////////////////////////////////////////////////

function main() 
{
    output(solve(getNumeri(input())));
}