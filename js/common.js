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

function getOperatori(Str) { // Prende gli operatori di una stringa
    Str = Str.split(/[^+|-|*|/]/);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < Str.length; i++) {
        if (isOperatore(Str[i])) {
            temp[itemp] = Str[i];
            itemp++;
        }
    }
    
    return temp;
}

function getNumeri(Str) { // Prende i numeri di una stringa
    Str = Str.split(/\D/);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < Str.length; i++) {
        if (Str[i] != 0) {
            temp[itemp] = Str[i];
            itemp++;
        }
    }
    
    return temp;
}

function getCoefficienti(Str) { // Prende i coefficienti di una stringa
    Str = Str.split("");
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < Str.length; i++) {
        if (!isFinite(Str[i]) && !isOperatore(Str[i])) {
            if (Str[i+1] == "²") {
                temp[itemp] = "" + Str[i] + Str[i+1];
                i++;
            }
            else
                temp[itemp] = Str[i];
            itemp++;
        }
    }

    return temp;
}

function split(Str) {
    var numeri = getNumeri(Str);
    var operatori = getOperatori(Str);
    var coefficienti = getCoefficienti(Str);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < numeri.length; i++) {
        temp[itemp] = operatori[i];
        itemp++;
        temp[itemp] = numeri[i];
        itemp++;
        temp[itemp] = coefficienti[i];
        itemp++;
    }

    return temp;
}