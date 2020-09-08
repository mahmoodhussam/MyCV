const menu = document.getElementById("menu-img") 
const main = document.getElementById("main")
const header = document.getElementById("nav-ul")
menu.addEventListener('click',()=>{
    main.classList.toggle('remove-main')
    header.classList.toggle('remove-nav')
})
