const menuicon = document.querySelector(".menuicon");
let menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show")
})