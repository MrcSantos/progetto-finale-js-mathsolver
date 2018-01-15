//Funzioni comuni per tutte le pagine

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
        throw new console.error("Parentesi errate");
}
