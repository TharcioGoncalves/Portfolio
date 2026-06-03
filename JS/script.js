let header = document.querySelector("#header")

window.addEventListener("scroll", function(){
    if(window.scrollY> 0){
        header.classList.add("background-header")
        console.log(header)
    }else{
        header.classList.remove("background-header")
    }
})

ScrollReveal().reveal('.hero-img',{
    duration:2000,
    distance:'10px',
    reset:false
})
ScrollReveal().reveal('.hero-info',{
    duration:2000,
    distance:'10px',
    delay:700,
    reset:false
})

let burger = document.querySelector(".burger");
let itens_menu = document.querySelector(".nav-items-menu");
burger.addEventListener("click", function(){
    itens_menu.classList.toggle("burger-active");
})