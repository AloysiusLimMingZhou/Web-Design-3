<<<<<<< HEAD


const faq1a= document.getElementById("faq1a");
const faq1b = document.getElementById("faq1b");
const faq1c = document.getElementById("faq1c");
const faq1d = document.getElementById("faq1d");
const faq1e = document.getElementById("faq1e");
const faq1f = document.getElementById("faq1f");


faq1a.addEventListener("click", show);
faq1c.addEventListener("click", show2);
faq1e.addEventListener("click", show3);


function show(){
   if(faq1b.style.display === "flex"){
   	faq1b.style.display = "none";
   }
   
   else{
   	faq1b.style.display = "flex";
   }
}

function show2(){
   if(faq1d.style.display === "flex"){
   	faq1d.style.display = "none";
   }
   
   else{
   	faq1d.style.display = "flex";
   }
}


function show3(){
   if(faq1f.style.display === "flex"){
   	faq1f.style.display = "none";
   }
   
   else{
   	faq1f.style.display = "flex";
   }
}



=======
import Aos from 'aos';
import "aos/dist/aos.css";

Aos.init{{
   duration: 1000,
   offset: 100
}}
>>>>>>> 3aeac703d7806701ac633be09be41a5d63732aac
