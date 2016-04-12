/* 
 * StockageDeSessionEcrire.js
 */

function init() {
    var t = new Array();
    t["pseudo"] = document.getElementById("pseudo").value;
    t["mdp"] = document.getElementById("mdp").value;
    ajouter(t);
}



// -----------
window.onload = init;