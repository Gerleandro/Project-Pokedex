const logo = document.querySelector(".logo");
let mouseEntered = false;

rotatelogo(false);

// stopTorataeLogo(): esta função remove a classe "myrotate" do elemento 
// logo, interrompendo efetivamente qualquer rotação em andamento.
function stopRotateLogo() {  
    logo.classList.remove("myrotate"); 
}
// movelogo(); esta função adiciona a classe "mymove" ao elemento logo, 
// que parece acionar algum tipo de animação de movimento.
function movelogo() {
    logo.classList.toggle("mymove", true);
}
// rotatelogo(): esta função alterna a classe "myrotate" no elemento 
// logo com base no valor do booparâmetro. Se boofor true, adiciona a 
// classe e, se boofor false, remove a classe.
function rotatelogo(boo) {
    logo.classList.toggle("myrotate", boo);
}

function clickHandler() { // desativa e ativa o clique (evitaar bugs)
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

// Event listener for mouseout
logo.addEventListener("mouseout", function () {
    rotatelogo(false);
    mouseEntered = false;
    logo.classList.remove("myrotate");
});