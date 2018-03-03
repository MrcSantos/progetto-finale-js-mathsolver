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

function getOperatori(Str) {
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

function getNumeri(Str) { // Divide la stringa in un array di numeri
    Str = Str.split(/\D/);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < Str.length; i++) {
        if (isFinite(Str[i])) {
            temp[itemp] = Str[i];
            itemp++;
        }
    }
    
    return temp;
}

function getCoefficienti(Str) {
    Str = Str.split(/\d/);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < Str.length; i++) {
        if (!isFinite(Str[i]) && !isOperatore(Str[i])) {
            temp[itemp] = Str[i];
            itemp++;
        }
    }

    return temp;
}

function split(Str) {
    var numeri = getNumeri(Str);
    alert(numeri);
    var operatori = getOperatori(Str);
    alert(operatori);
    var coefficienti = getCoefficienti(Str);
    alert(coefficienti);
    var temp = [];
    var itemp = 0;

    for (var i = 0; i < numeri.length; i++) {
        temp[itemp] = operatori[i];
        itemp++;
        temp[itemp] = numeri[i];
        itemp++;
        temp[itemp] = coefficienti[i];
        itemp++;
        alert(temp);
    }

    return temp;
}