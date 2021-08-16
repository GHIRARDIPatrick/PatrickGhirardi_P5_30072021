// PRODUIT - Quantité & Commande
const produitQuantite = document.getElementById("produit-quantite");
let valeur = 0;
alert("Ca fonctionne");

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
    document.getElementById("produit-quantite").innerText = (++produitQuantite.value) + '';
    document.getElementById("produit-commande").disabled = false;

});

document.getElementById("produit-commande").addEventListener("click", function() {
    alert("Mis en Panier");
});


// ________________________________________________________________________________________________________________
// PANIER - Controle Formulaire
document.getElementById("Cpostal").addEventListener("input", function() {
    var code = document.getElementById("Cpostal");
    var error = false;
    if (!code.match(/^([0-9]){5}$/))
        alert('Le code semble correct...');
    else
        alert('Mauvais format de code ! (4 chiffres)');
});




// ________________________________________________________________________________________________________________
// INDEX - Affichage des oursons en liste

function askHello() {
    fetch("http://localhost:3000/api/teddies/request?teddies")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            document
                .getElementById("hello-result")
                .innerText = value.queryString.greetings;
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}