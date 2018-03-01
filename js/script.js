function header_showcat() {
    document.getElementById('categories').style.display = 'inline';
    document.getElementById('about').style.display = 'none';
}

function header_showinfo() {
    document.getElementById('categories').style.display = 'none';
    document.getElementById('about').style.display = 'inline';
}

function header_changelang() {
    var lang = document.getElementById('language');

    if (lang.style.display == 'block') lang.style.display = 'none';
    else lang.style.display = 'block';
}