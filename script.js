// navigation menu 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display ="block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}
// for side navigation
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity ="0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX ="hidden";
    scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX ="auto";
    scrollBtn.style.pointerEvents = "auto";
}
// auto close navigation
let navlinks =document.querySelectorAll(".menu li a");
for(var i = 0; i<navlinks.length; i++){
    navlinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents ="auto";
    });
}

jQuery(document).ready(function(){
    $('.home-content').ripples({
dropRadius:20,
perturbance: 0.03,


});
   });
   let animates =new Typed('#zeb',{
       strings:["Full Stack Web Developer","Photographer","Editor"],
       typeSpeed:100,
       backSpeed:100,
       loop:true,
   })
   let animates2 =new Typed('#zeb2',{
    strings:["Passion","best-friend","soulmate"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
})
let animates3 =new Typed('#zeb3',{
    strings:["Knowledge","Hard Work","Commit"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
})