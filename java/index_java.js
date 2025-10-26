//Open &close Burger_Menue
let Burger_menue_icon=document.querySelector("header .burger_menue");
let Burger_Menue_details=document.querySelector(".burger_menue_details");
let Burger_Menue_close_button=document.querySelector(".burger_menue_details .close_button");
let hero_text=document.querySelector(".hero_section .left p");
let hero_h5_title=document.querySelector(".hero_section .left h5");
let hero_h1_title=document.querySelector(".hero_section .left h1");

    //Function to open Burger Menue
Burger_menue_icon.addEventListener("click",()=>{
    Burger_Menue_details.classList.add("open")
})
   //Function to close Burger Menute
   Burger_Menue_close_button.addEventListener("click",()=>{
    Burger_Menue_details.classList.remove("open")
   })
   
 //make  animation to hero_section text
window.onload=function(){
    gsap.fromTo(hero_text,{opacity:"0%"},{opacity:"100%",duration:"10"})
    gsap.fromTo(hero_h1_title,{opacity:"0%"},{opacity:"100%",duration:"10"})
      gsap.fromTo(hero_h5_title,{opacity:"0%"},{opacity:"100%",duration:"10"})
     gsap.fromTo( personal_picture,{opacity:0},{opacity:1,duration:7,ease:"power2.out"});
}    

