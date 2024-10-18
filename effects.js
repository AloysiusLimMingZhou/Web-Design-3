const btn = document.getElementById("btn");
btn.addEventListener("click", darkMode);

function darkMode(){
   const effects = document.getElementById("effects");
   const nav = document.getElementById("nav");
   const navlinks1 = document.getElementById("navlinks1");
   const navlinks2 = document.getElementById("navlinks2");
   const navlinks3 = document.getElementById("navlinks3");
   const navlinks4 = document.getElementById("navlinks4");
   const footer = document.getElementById("footer");
   
   effects.classList.toggle("dark-mode");
   footer.classList.toggle("light-mode");


   nav.style.background = "#fff";
   navlinks1.style.color = "#000";
   navlinks2.style.color = "#000";
   navlinks3.style.color = "#000";
   navlinks4.style.color = "#000";
   btn.style.background = "#fff";
   btn.style.color = "000";
}