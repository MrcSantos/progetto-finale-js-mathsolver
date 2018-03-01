//Funzioni comuni per tutte le pagine

PARENTESI = ["{", "[", "(", ")", "]", "}"];
OPERATORI = ["+", "-", "*", "/"];

////////////////////////////////////////////////////////////////////////////////

function isOperatore(car) {
    for (i = 0; i < OPERATORI.length; i++) {
        if (car == OPERATORI[i]) {
            return true;
        }

        return false;;
    }
}

////////////////////////////////////////////////////////////////////////////////

function isParentesiA(car) {
    for (i = 0; i < PARENTESI.length / 2; i++) {
        if (car == PARENTESI[i]) {
            return true;
        }

        return false;;
    }
}

////////////////////////////////////////////////////////////////////////////////

function isParentesiC(car) {
    for (i = PARENTESI.length / 2; i < PARENTESI.length; i++) {
        if (car == PARENTESI[i]) {
            return true;
        }

        return false;;
    }
}

////////////////////////////////////////////////////////////////////////////////

function stampa(Str) {
    document.getElementById('output').innerHTML = Str;
}

////////////////////////////////////////////////////////////////////////////////

function divPar(Originale) {
    var char = Originale.split("");
    var div = [];    

    for (var i = 0; i < char.length(); i++) {
        if (isParentesiA(char[i])) {
            
            divPar(char)
        } 
    }

    return div;
}

////////////////////////////////////////////////////////////////////////////////

function getNumeri(Str) { // Divide la stringa in un array di numeri
    Str = Str.split(/\D/);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < Str.length; i++) {
        if (!parseInt(Str[i]) == 0) {
            temp[itemp] = Str[i];
            itemp++;
        }
    }
    return temp;
}
