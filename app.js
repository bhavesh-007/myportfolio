var ham = document.getElementById("hamburger1");
var navlink=document.getElementById("navlink");
var download=document.getElementById("resume");
var ham2=document.getElementById("hamburger2"); 

ham.addEventListener('click',() =>{
    navlink.classList.toggle("nav-active");
    download.hidden=true;
    alert("Navlink Under development")
});
