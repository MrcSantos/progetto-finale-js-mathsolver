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
    var a;
    var b;
    var c;

    a=prompt("Dammi il numero");
    b=prompt("Dammi il numero");
    c=prompt("Dammi il numero");

    var d=Math.sqrt(b*b-4*a*c);
    document.getElementById("result").innerHTML=d;

    if((a==0)||(d<0))
        alert("Impossibile risolvere l'equazione");
    else {
        var x1 = (-b + d ) / (a*2);
        var x2 = (-b - d ) / (a*2);
        document.getElementById("result").innerHTML=x1 + ", " + x2;}
    }


    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/


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


    function change(varr)
    {
        var aa = varr.value;

        if(isNum(aa))
        {

        }
        else
        {
            aa = aa.substring(0,aa.length-1);
            document.first.frac.value = aa;
        }
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
        else{}
    }


    function color(test)
    {

        for(var j=2; j<6; j++)
        {
            var myI=document.getElementsByTagName("input").item(j);
            myI.style.backgroundColor=test;

        }
    }


    function color1(test)
    {
        var myI=document.getElementsByTagName("table").item(0);
        //myI.setAttribute("style",ch);
        myI.style.backgroundColor=test;
    }
