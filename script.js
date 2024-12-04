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

var quheads = "https://i.imgur.com/7nwisjG.png";
var qutails = "https://i.imgur.com/ErnbY1Q.png";
var myimg = document.querySelector("#myimg");
var result = document.querySelector("#result");
var posrotInterval, negrotInterval;

//css way
myimg.addEventListener("click", function() {
    counter = 1;
    toggler = false;
    degflag = false;
    enddegflag = false;
    randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    myimg.style.transform = "rotateY(89deg)";
    if (initRun) {
        myimg.src = (myimg.src == quheads) ? qutails : quheads;
        initRun = false;
    }

}, false);

myimg.addEventListener("transitionend", function () {
    if (counter < randNumber) {
        toggler = !toggler;
        if (toggler) {
            myimg.src = (myimg.src == quheads) ? qutails : quheads;
            myimg.style.transform = "rotateY(0deg)";
            degflag = false;
        }
        else {
            myimg.style.transform = "rotateY(89deg)";
            degflag = true;
        }
        counter += 1;
    }
    else {
        if (degflag && !enddegflag) {
            myimg.style.transform = "rotateY(0deg)";
            myimg.src = (myimg.src == quheads) ? qutails : quheads;
            enddegflag = true;
        }
        else {

            if (myimg.src == quheads) {
                result.innerHTML = "HEADS";
                result.style.color = "#00aaff";
            }
            else {
                result.innerHTML = "TAILS";
                result.style.color = "#cc0000";
            }
        }
    }
}, false);