var ham = document.getElementById("hamburger1");
var navlink=document.getElementById("navlink");

ham.addEventListener('click',() =>{
    navlink.classList.toggle("open");
    
});