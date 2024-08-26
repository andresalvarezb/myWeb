const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const menu = document.getElementById("menu")

menuOpen.addEventListener('click', (e) => {
    menu.classList.add("show-menu")
    menuOpen.classList.add("hidden-menu")
})

menuClose.addEventListener('click', (e) => {
    menu.classList.remove("show-menu")
    menuOpen.classList.remove("hidden-menu")
    menuOpen.classList.add("show-menu")
})

