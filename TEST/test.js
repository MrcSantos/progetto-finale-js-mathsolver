/*function prot() {
    int NumX2;
    int NumX;
    int Num;
    int Delta;
    int R;
    int R1;
    int R2;
    printf ("Deltaammi la variabile NumX2 ");
    scanf ("%d", &NumX2);
    printf ("Deltaammi la variabile NumX ");
    scanf ("%d", &NumX);
    printf ("Deltaammi la variabile Num ");
    scanf ("%d", &Num);
    if (NumX2 != 0)
    {
        Delta = NumX*NumX -4 * NumX2 * Num;
        if (Delta >= 0)
        {
            R1 = (-NumX + sqrt(Delta)) / (2 * NumX2);
            R2 = (-NumX - sqrt(Delta)) / (2 * NumX2);
            printf ("I risultati sono: %d e %d", R1, R2);
        }
        else
        {
            printf ("Non riesco a calcolare il risultato");
        }
    }
    else
    {
        if (NumX == 0)
        {
            if (Num == 0)
            {
                printf ("Equazione indeterminata.");
            }
            else
            {
                printf ("Equazione impossibile.");
            }
        }
        else
        {
            R = -(Num / NumX);
            printf ("Il risultato è: %d", R);
        }
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

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


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*

var forma=''
var a, b, c

function calcolaPrimo() {
   if (b==0) {
     if (c==0) {
            document.getElementById('ris').innerHTML = forma + ' è un\'equazione indeterminata'
      } else {
              document.getElementById('ris').innerHTML = forma + ' è un\'equazione impossibile'
             }
    }
  else {
      x=-c/b;
      document.getElementById('ris').innerHTML = forma + ' è un\'equazione di primo grado determinata.<br> La soluzione è ' + x;
      }
    }
function calcola() {
forma =a + 'x<sup><small>2</sup></small>';
if (b>=0){forma+='+'}
   forma+=b + 'x';
if (c>=0){forma+='+'}
 forma+=c + ' = 0';
  if (a==0) {calcolaPrimo()}
  else {
  delta = Math.pow(b,2)-4*a*c
  if (delta<0) {
           document.getElementById('ris').innerHTML = forma + " non ammette radici reali"
               }
        else {
        if (delta==0) {
         x=-b/(2*a)
         document.getElementById('ris').innerHTML = forma + "  ammette due radici reali e coincidenti date da <br>"+ "x<sub><small>1</sub></small> = x<sub><small>2</sub></small> = " + x;
           }
        else {
          x1=(-b - Math.sqrt(delta)) /(2*a);
          x2=(-b + Math.sqrt(delta)) /(2*a);
    document.getElementById('ris').innerHTML =  forma + "  ammette due radici reali e distinte date da <br>"+ "x<sub><small>1</sub></small> = " + x1 +"<br>x<sub><small>2</sub></small> = " + x2
            }
           }
       }
 }
function esegui() {
  a=Number(document.equa.a1.value);
  b=Number(document.equa.b1.value);
  c=Number(document.equa.c1.value);
 if (a==0){document.equa.a1.value = 0}
 if (b==0){document.equa.b1.value = 0}
 if (c==0){document.equa.c1.value = 0}
 if (isNaN(a) || isNaN(b) || isNaN(c)) {
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






    var forma=''
var a, b, c

function calcolaPrimo() {
   if (b==0) {
     if (c==0) {
            document.getElementById('ris').innerHTML = forma + ' è un\'equazione indeterminata'
      } else {
              document.getElementById('ris').innerHTML = forma + ' è un\'equazione impossibile'
             }
    }
  else {
      x=-c/b;
      document.getElementById('ris').innerHTML = forma + ' è un\'equazione di primo grado determinata.<br> La soluzione è ' + x;
      }
    }
function calcola() {
forma =a + 'x<sup><small>2</sup></small>';
if (b>=0){forma+='+'}
   forma+=b + 'x';
if (c>=0){forma+='+'}
 forma+=c + ' = 0';
  if (a==0) {calcolaPrimo()}
  else {
  delta = Math.pow(b,2)-4*a*c
  if (delta<0) {
           document.getElementById('ris').innerHTML = forma + " non ammette radici reali"
               }
        else {
        if (delta==0) {
         x=-b/(2*a)
         document.getElementById('ris').innerHTML = forma + "  ammette due radici reali e coincidenti date da <br>"+ "x<sub><small>1</sub></small> = x<sub><small>2</sub></small> = " + x;
           }
        else {
          x1=(-b - Math.sqrt(delta)) /(2*a);
          x2=(-b + Math.sqrt(delta)) /(2*a);
    document.getElementById('ris').innerHTML =  forma + "  ammette due radici reali e distinte date da <br>"+ "x<sub><small>1</sub></small> = " + x1 +"<br>x<sub><small>2</sub></small> = " + x2
            }
           }
       }
 }
function esegui() {
  a=Number(document.equa.a1.value);
  b=Number(document.equa.b1.value);
  c=Number(document.equa.c1.value);
 if (a==0){document.equa.a1.value = 0}
 if (b==0){document.equa.b1.value = 0}
 if (c==0){document.equa.c1.value = 0}
 if (isNaN(a) || isNaN(b) || isNaN(c)) {
            document.getElementById('ris').innerHTML = 'Non hai immesso valori validi'
  }
 else {
  calcola();
 }
}
</script>
*/
