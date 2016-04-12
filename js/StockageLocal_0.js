/* 
 * StockageLocal_0.js
 */

function init() {
    document.getElementById("btAjouter").onclick = function() {
        localStorage.setItem("nom", document.getElementById("nom").value);
        localStorage.setItem("prenom", document.getElementById("prenom").value);
    };

    document.getElementById("btSupprimer").onclick = function() {
        localStorage.removeItem("nom");
        localStorage.removeItem("prenom");
    };
} /// init

// -----------------
window.onload = init;

