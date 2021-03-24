const menuBtn = document.getElementById("menuBtn");
const overlayDiv = document.querySelector(".overlay");
const menu = document.getElementById("menu");
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector("body");
function changeImg() {
    if (menuBtn.getAttribute("src") === "images/icon-hamburger.svg") {
        console.log("Hamburger");
        menuBtn.setAttribute("src", "images/icon-close.svg");
        body.classList.add("no-scroll");
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        //overlayDiv.classList.add("overlay");
    } else {
        menuBtn.setAttribute("src", "images/icon-hamburger.svg");
        body.classList.remove("no-scroll");
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
}
menuBtn.addEventListener("click", changeImg);