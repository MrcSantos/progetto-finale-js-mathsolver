function sol() {
    var nX2, nX, n, D, out1, out2;

/*--Variabili-----------------------------------------------------------------*/

    nX2 = $("#inputA").val();
    nX = $("#inputB").val();
    n = $("#inputC").val();

/*--Input---------------------------------------------------------------------*/

    if (isNaN(nX2) || isNaN(nX) || isNaN(n))
        $("#result").text() = 'Non hai immesso valori validi';
    else {
        D = Math.sqrt(nX*nX -4*nX2*n);
        $("#result").text() = D;

        if ((nX2 == 0) || (D < 0))
            $("#result").text() = "Impossibile risolvere l'equazione";
        else {
            out1 = (-nX + D ) / (nX2*2);
            out2 = (-nX - D ) / (nX2*2);

            if (isNaN(out1) || isNaN(out2))
                document.getElementById("result").innerHTML = "Impossibile";
            else
                document.getElementById("result").innerHTML = out1 + ", " + out2;
        }
    }

/*--Esecuzione----------------------------------------------------------------*/

}


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var forma=''
var nX2, nX, n

function calcolaPrimo() {
    if (nX==0) {
        if (n==0) {
            document.getElementById('ris').innerHTML = forma + ' è un\'equazione indeterminata'
        } else {
            document.getElementById('ris').innerHTML = forma + ' è un\'equazione impossibile'
        }
    }
    else {
        x=-n/nX;
        document.getElementById('ris').innerHTML = forma + ' è un\'equazione di primo grado determinata.<br> La soluzione è ' + x;
    }
}
function calcola() {
    forma =nX2 + 'x<sup><small>2</sup></small>';
    if (nX>=0){forma+='+'}
    forma+=nX + 'x';
    if (n>=0){forma+='+'}
    forma+=n + ' = 0';
    if (nX2==0) {calcolaPrimo()}
    else {
        delta = Math.pow(nX,2)-4*nX2*n
        if (delta<0) {
            document.getElementById('ris').innerHTML = forma + " non ammette radici reali"
        }
        else {
            if (delta==0) {
                x=-nX/(2*nX2)
                document.getElementById('ris').innerHTML = forma + "  ammette due radici reali e coincidenti date da <br>"+ "x<sub><small>1</sub></small> = x<sub><small>2</sub></small> = " + x;
            }
            else {
                out1=(-nX - Math.sqrt(delta)) /(2*nX2);
                out2=(-nX + Math.sqrt(delta)) /(2*nX2);
                document.getElementById('ris').innerHTML =  forma + "  ammette due radici reali e distinte date da <br>"+ "x<sub><small>1</sub></small> = " + out1 +"<br>x<sub><small>2</sub></small> = " + out2
            }
        }
    }
}
function esegui() {
    nX2=Number(document.equa.a1.value);
    nX=Number(document.equa.b1.value);
    n=Number(document.equa.c1.value);
    if (nX2==0){document.equa.a1.value = 0}
    if (nX==0){document.equa.b1.value = 0}
    if (n==0){document.equa.c1.value = 0}
    if (isNaN(nX2) || isNaN(nX) || isNaN(n)) {
        document.getElementById('ris').innerHTML = 'Non hai immesso valori validi'
    }
    else {
        calcola();
    }
}
</script>


function isNum(args)
{
    args = args.toString();

    if (args.length == 0)
    return false;

    for (var i = 0;  i<args.length;  i++)
    {
        if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != ".")
        {
            return false;
        }
    }

    return true;

}

function hcfof(num1,num2)
{
    var firnum,secnum;
    if(num1<num2)
    {
        firnum = num1;
        secnum = num2;
    }
    else
    {
        firnum = num2;
        secnum = num1;
    }

    var rem = (secnum%firnum);

    while(rem > 0)
    {
        secnum = firnum;
        firnum = rem;
        rem = (secnum%firnum);
    }

    var hcf = firnum;

    return hcf;
}


function calfrac()
{
    var aa = document.first.frac.value;

    if(isNum(aa))
    {
        aa=aa*1;
        var bb = Math.floor(aa);
        var cc = aa-bb;

        var dd = 1;
        if(cc != 0)
        dd = Math.pow(10,aa.toString().length-2);
        var ee = Math.round(aa*dd);

        document.first.t1.value = ee;
        document.first.t2.value = dd;

        var hcf = hcfof(ee,dd);
        ee = ee/hcf;
        dd = dd/hcf;
        document.first.t3.value = ee;
        document.first.t4.value = dd;
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var forma=''
var nX2, nX, n

function calcolaPrimo() {
    if (nX==0) {
        if (n==0) {
            document.getElementById('ris').innerHTML = forma + ' è un\'equazione indeterminata'
        } else {
            document.getElementById('ris').innerHTML = forma + ' è un\'equazione impossibile'
        }
    }
    else {
        x=-n/nX;
        document.getElementById('ris').innerHTML = forma + ' è un\'equazione di primo grado determinata.<br> La soluzione è ' + x;
    }
}

function calcola() {
    forma =nX2 + 'x<sup><small>2</sup></small>';
    if (nX>=0){forma+='+'}
    forma+=nX + 'x';
    if (n>=0){forma+='+'}
    forma+=n + ' = 0';
    if (nX2==0) {calcolaPrimo()}
    else {
        delta = Math.pow(nX,2)-4*nX2*n
        if (delta<0) {
            document.getElementById('ris').innerHTML = forma + " non ammette radici reali"
        }
        else {
            if (delta==0) {
                x=-nX/(2*nX2)
                document.getElementById('ris').innerHTML = forma + "  ammette due radici reali e coincidenti date da <br>"+ "x<sub><small>1</sub></small> = x<sub><small>2</sub></small> = " + x;
            }
            else {
                out1=(-nX - Math.sqrt(delta)) /(2*nX2);
                out2=(-nX + Math.sqrt(delta)) /(2*nX2);
                document.getElementById('ris').innerHTML =  forma + "  ammette due radici reali e distinte date da <br>"+ "x<sub><small>1</sub></small> = " + out1 +"<br>x<sub><small>2</sub></small> = " + out2
            }
        }
    }
}

function esegui() {
    nX2=Number(document.equa.a1.value);
    nX=Number(document.equa.b1.value);
    n=Number(document.equa.c1.value);
    if (nX2==0){document.equa.a1.value = 0}
    if (nX==0){document.equa.b1.value = 0}
    if (n==0){document.equa.c1.value = 0}
    if (isNaN(nX2) || isNaN(nX) || isNaN(n)) {
        document.getElementById('ris').innerHTML = 'Non hai immesso valori validi'
    }
    else {
        calcola();
    }
}
