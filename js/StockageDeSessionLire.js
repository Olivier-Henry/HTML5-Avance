/* 
 * StockageDeSessionLire.js
 */
// ----------
function init() {
    document.getElementById("pseudo").innerHTML = lire("pseudo");
    document.getElementById("mdp").innerHTML = lire("mdp");
} /// init

// ----------
window.onload = init;