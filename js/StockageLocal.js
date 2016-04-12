/*
 * StockageLocal.js
 */

// -------------
function ajouter(t) {
    // On ajoute la variable … via une boucle parce qu'on ne connait pas la clef
    for (var cle in t) {
        localStorage[cle] = t[cle];
    }
} /// ajouter

// ---------------------
function changerCouleurs() {
    // Modififie la couleur de l'element input (ie le rectangle)
    document.getElementById("fond").value = localStorage["fond"];
    // Colorise le body
    document.getElementsByTagName("body")[0].style.backgroundColor = localStorage["fond"];
    // Modififie la couleur de l'element input (ie le rectangle)
    document.getElementById("texte").value = localStorage["texte"];
    // Colorise le texte du body
    document.getElementsByTagName("body")[0].style.color = localStorage["texte"];
}

function resetAll() {
    document.getElementsByTagName("body")[0].style.color = '#000000';
    document.getElementsByTagName("body")[0].style.backgroundColor = '#FFFFFF';
    document.getElementById("texte").value = "#000000";
    document.getElementById("fond").value = "#FFFFFF";
    localStorage.removeItem("fond");
    localStorage.removeItem("texte");
}

// ----------
function init() {


    // Si les variables existent 
    if (localStorage["fond"] !== undefined && localStorage["texte"] !== undefined) {
        changerCouleurs();
        console.log(localStorage["fond"]);
        console.log(localStorage["texte"]);
    }

    // Lorsque au retour de la boîte de dialogue ...
    document.getElementById("fond").onchange = function() {
        var t = new Array();

        t["fond"] = document.getElementById("fond").value;
        // Modification du storage
        ajouter(t);
        // Modification de l'interface
        changerCouleurs();
    };

    document.getElementById("texte").onchange = function() {
        var t = new Array();

        t["texte"] = document.getElementById("texte").value;
        ajouter(t);
        changerCouleurs();
    };

    document.getElementById("btReset").onclick = resetAll;

} /// init



// --- Chargement de la page
window.onload = init;