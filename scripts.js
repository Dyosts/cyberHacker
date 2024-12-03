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
            document.querySelector("#lasttime").innerHTML = new Date().toLocaleString();
        }
    }
}, false);