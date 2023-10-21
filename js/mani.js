var elButton = document.querySelector(".btn")
var elButtonMenu = document.querySelector(".btn__menu")
var elButtonExit = document.querySelector(".btn__exit")
var elNavList = document.querySelector(".nav__list")


elButton.addEventListener("click", () => {
    elButtonMenu.classList.toggle("btn__menu--exit")
    elButtonExit.classList.toggle("btn__exit--menu")
    elNavList.classList.toggle("nav__block")
})

console.log(elButton,elButtonMenu,elButtonExit,elNav);