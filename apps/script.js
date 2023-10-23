const pokeImg = document.getElementById('pokeImage');
const pokeName = document.getElementById('pokeName');
const pokeInpSearch = document.getElementById('pokeSeach');
const logo = document.querySelector(".logo");

let mouseEntered = false;

function stopRotateLogo() {
    logo.classList.remove("myrotate");
}

function movelogo() {
    logo.classList.toggle("mymove", true);
}

function rotatelogo(boo) {
    logo.classList.toggle("myrotate", boo);
}

function clickHandler() { // desativa e ativa o clique (evitaar bugs)
    console.log("clicked in document, should move logo");
    logo.classList.add("myrotate");
    movelogo();
    stopRotateLogo();
    setTimeout(function(){}, 5000); // Espera para nao poder bugar tudo
}

logo.addEventListener("click", clickHandler);

logo.addEventListener("mouseenter", function () {
    if (!mouseEntered) {
        rotatelogo(true);
    }
    mouseEntered = true;
});
;

// Event listener for mouseout
logo.addEventListener("mouseout", function () {
    rotatelogo(false);
    mouseEntered = false;
    logo.classList.remove("myrotate");
});
