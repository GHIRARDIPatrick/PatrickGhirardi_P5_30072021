// PRODUIT - Quantité & Commande
const produitQuantite = document.getElementById("produit-quantite");
let valeur = 0;

document.getElementById("produit-moins").addEventListener("click", function() {
    if (produitQuantite.value < 1) {
        alert("Produit négatif");
    } else {
        if (produitQuantite.value < 2) {
            document.getElementById("produit-commande").disabled = true;
            document.getElementById("produit-quantite").innerText = (--produitQuantite.value) + '';

        } else {
            document.getElementById("produit-quantite").innerText = (--produitQuantite.value) + '';
        }
    }

});

document.getElementById("produit-plus").addEventListener("click", function() {
    alert("Produit");
    document.getElementById("produit-quantite").innerText = (++produitQuantite.value) + '';
    document.getElementById("produit-commande").disabled = false;

});

document.getElementById("produit-commande").addEventListener("click", function() {
    alert("commande en attente");
});