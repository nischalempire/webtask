

function toggleMenu(){
const navlinks = document.querySelector(".nav-links")
navlinks.classList.toggle("mobile-menu")
}



let navbar = document.querySelector("nav");
var scrollprev = window.pageYOffset
window.onscroll = function(){
    var scrollcur = window.pageYOffset;
    if(scrollprev > scrollcur){
        navbar.style.top="0";
    }
    else{
        navbar.style.top="-90px"
    }
    scrollprev = scrollcur;
}


      

