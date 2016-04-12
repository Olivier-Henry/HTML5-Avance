/*
 * StockageDeSession.js
 */

// -------------
function ajouter(t) {
    for(var cle in t) {
        sessionStorage.setItem(cle, t[cle]);
    }
} /// ajouter

// -----------
function lire(cle) {
    var bOK = false;
    if(sessionStorage[cle] !== undefined) {
        bOK = sessionStorage.getItem(cle);
    }
    return bOK;
} /// lire