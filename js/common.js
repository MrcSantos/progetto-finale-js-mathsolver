//Funzioni comuni per tutte le pagine

function dividi() { // Divide la stringa in un array
    return var divisa = this.split(/\d|\D/gi); // Utilizzo delle regex per dividere la stringa
}

////////////////////////////////////////////////////////////////////////////////

function divPar(Parentesi) {
    if (Parentesi == '(' || Parentesi == '[' || Parentesi == '{') {
        var pieces = [];

        pieces = this.split(Parentesi);

        if(Parentesi == '(')
            pieces = this.split((char)Parentesi+1);
        else
            pieces = this.split((char)Parentesi+2);

        return pieces;
    }
    else
        throw new TypeError("Parentesi errate");
}
