document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll(".nav-list a");

    // Ajouter des écouteurs d'événements pour chaque lien
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            // Récupérer la classe cible à partir de l'attribut data-target
            const targetClass = event.target.getAttribute("data-target");

            // Masquer tous les éléments avec la classe .wiki
            document.querySelectorAll(".content-section").forEach(element => {
                element.classList.remove("active");
            });

            // Afficher tous les éléments avec la classe cible
            document.querySelectorAll(`.${targetClass}`).forEach(targetElement => {
                targetElement.classList.add("active");
            });
        });
    });
});

// COIN FLIP

var initRun = true;
var toggler = false;
var degflag = false;
var enddegflag = false;
var min = 10;
var max = 17;
var randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
var counter = 1;

// Remplacez les URLs des images par vos propres fichiers
var quheads = "logo.png"; // Image pour la face (logo)
var qutails = "tail.png"; // Image pour la pile (taille)
var myimg = document.querySelector("#myimg");
var result = document.querySelector("#result");

// Écouteur d'événement pour le clic sur l'image
myimg.addEventListener("click", function () {
    counter = 1;
    toggler = false;
    degflag = false;
    enddegflag = false;
    randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    myimg.style.transform = "rotateY(89deg)";
    if (initRun) {
        // Choisir l'image initiale à afficher
        myimg.src = (myimg.src.includes(quheads)) ? qutails : quheads;
        initRun = false;
    }

}, false);

// Écouteur d'événement pour la fin de l'animation de transition
myimg.addEventListener("transitionend", function () {
    if (counter < randNumber) {
        toggler = !toggler;
        if (toggler) {
            myimg.src = (myimg.src.includes(quheads)) ? qutails : quheads;
            myimg.style.transform = "rotateY(0deg)";
            degflag = false;
        } else {
            myimg.style.transform = "rotateY(89deg)";
            degflag = true;
        }
        counter += 1;
    } else {
        if (degflag && !enddegflag) {
            myimg.style.transform = "rotateY(0deg)";
            myimg.src = (myimg.src.includes(quheads)) ? qutails : quheads;
            enddegflag = true;
        } else {
            // Déterminer le résultat en fonction de l'image affichée
            if (myimg.src.includes(quheads)) {
                result.innerHTML = "HEAD";
                result.style.color = "#9400FF"; // Couleur pour face
            } else {
                result.innerHTML = "TAIL";
                result.style.color = "#cc0000"; // Couleur pour pile
            }
        }
    }
}, false);

// Sélectionner toutes les cartes
const cards = document.querySelectorAll('.flip-card-inner');

// Fonction pour appliquer la rotation en fonction du scroll
function rotateCardsOnScroll() {
    // Parcourir chaque carte et appliquer la rotation en fonction de sa position
    cards.forEach((card) => {
        // Obtenir la position de la carte par rapport à la fenêtre
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardBottom = cardRect.bottom;

        // Calculer la position de la carte par rapport à la fenêtre visible
        const windowHeight = window.innerHeight;

        // La carte doit tourner en fonction de sa position
        let rotationDegree = 0;

        // Si la carte est dans la fenêtre de visualisation (visible ou partiellement)
        if (cardTop < windowHeight && cardBottom > 0) {
            // Calculer la proportion de la carte visible dans la fenêtre
            const visibility = Math.min(1, Math.max(0, cardBottom / windowHeight));

            // La rotation va de 0° (carte frontale visible) à 180° (carte arrière visible)
            rotationDegree = visibility * 180;
        }

        // Appliquer la transformation de rotation
        card.style.transform = `rotateY(${rotationDegree}deg)`;
    });
}

// Écouter l'événement scroll
window.addEventListener('scroll', rotateCardsOnScroll);

// Appeler immédiatement la fonction pour mettre à jour les cartes au chargement de la page
rotateCardsOnScroll();
