function header_showcat() 
{
    document.getElementById('categories').style.display = 'inline';
    document.getElementById('about').style.display = 'none';
}

function header_showinfo() 
{
    document.getElementById('categories').style.display = 'none';
    document.getElementById('about').style.display = 'inline';
}

function header_changelang(n) 
{
    var lang = document.getElementById('language');
    if (lang.style.display == 'block') lang.style.display = 'none';
    else lang.style.display = 'block';
	
	
	if (n == 0) //italiano
	{
		document.getElementById('title_lang').innerHTML = "Scegli la lingua";
		document.getElementById('l1').innerHTML = "Equazioni di Secondo Grado";
		document.getElementById('l2').innerHTML = "inserire il testo includendo tutti i termini<br>es: x^2 -2x -4";
		document.getElementById('l3').innerHTML = "RISOLVI";
		document.getElementById('output').innerHTML = "";
	}
	if (n == 1) //inglese
	{
		document.getElementById('title_lang').innerHTML = "Choose language";
		document.getElementById('l1').innerHTML = "Second Degree Equations";
		document.getElementById('l2').innerHTML = "insert the text including all the terms <br>ex: x^2 -2x -4";
		document.getElementById('l3').innerHTML = "RESOLVE";
		document.getElementById('output').innerHTML = "";
	}
}