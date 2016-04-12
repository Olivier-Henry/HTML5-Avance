
function init() {
    //on stocke des données
    localStorage.setItem("Nom", "Henry");
    localStorage.setItem("Prenom", "Olivier");
    localStorage.setItem("Pseudo", "Olivhen");
    localStorage.setItem("age", "36 ans");


    //on boucle et on parse
    var lsLocalStorage = "";

    for (var i = 0; localStorage.length; i++) {
        lsLocalStorage += localStorage.key(i) + ":" + localStorage.getItem(localStorage.key(i)) + "<br />";
    }

    console.log(lsLocalStorage);

}

window.onload = init;