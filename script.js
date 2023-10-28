const slidingMenu = document.getElementById("slideMenu");
const hamMenu = document.getElementById("hamMenu");
const closebtn = document.getElementById("close");



hamMenu.addEventListener("click", () => {
    slidingMenu.classList.add("active");
});

closebtn.addEventListener("click", () => {
    slidingMenu.classList.remove("active");
});