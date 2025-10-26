//variables
let text_title=document.querySelector(".details .steps .text .text_title h3 ");
let text_body=document.querySelector(".details .steps .text .text_body p");
let image=document.querySelector(".hero_section_crew .right .image img");
let opetions_steps=document.querySelectorAll(".details .steps .options h5 ");
const  mediaQuery = window.matchMedia("(max-width: 768px)");
//Calling API  request
let data_api=new XMLHttpRequest();
data_api.open( "GET","../json/tech.json",true);
data_api.send();
let main_data;


data_api.onreadystatechange=function(){
if(this.status===200&&this.readyState===4){
main_data=JSON.parse(data_api.responseText);
opetions_steps.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
      for(let i=0;i<main_data.length;i++){
        if(main_data[i].id==e.currentTarget.id){
          text_title.innerHTML=main_data[i].title;
          text_body.innerHTML=main_data[i].text;
          
            if(mediaQuery.matches===true){
              image.src=main_data[i].image_media;
            }else{
              image.src=main_data[i].image_desktop;
            }
          
        }
        
      }
    })
})


}
}


 opetions_steps.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        opetions_steps.forEach((ele)=>{
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        gsap.fromTo( text_title,{opacity:"0%"},{opacity:"100%",duration:"5"});
        gsap.fromTo( text_body,{opacity:"0%"},{opacity:"100%",duration:"5"});
        gsap.fromTo( opetions_steps,{opacity:"0%"},{opacity:"100%",duration:"5"});
        gsap.fromTo( ".hero_section_crew .title h2 ",{opacity:"0%"},{opacity:"100%",duration:"5"});
        gsap.fromTo( ".hero_section_crew .details .details_title h6 ",{opacity:"0%"},{opacity:"100%",duration:"5"});
        gsap.fromTo( ".right ,image img ",{opacity:"0%"},{opacity:"100%",duration:"5"});
       
    })
 })

//make animation to the text
window.onload=function(){
  gsap.fromTo( text_title,{opacity:"0%"},{opacity:"100%",duration:"5"});
  gsap.fromTo( text_body,{opacity:"0%"},{opacity:"100%",duration:"5"});
  gsap.fromTo( opetions_steps,{opacity:"0%"},{opacity:"100%",duration:"5"});
  gsap.fromTo( ".hero_section_crew .title h2 ",{opacity:"0%"},{opacity:"100%",duration:"5"});
  gsap.fromTo( ".hero_section_crew .details .details_title h6 ",{opacity:"0%"},{opacity:"100%",duration:"5"});
   gsap.fromTo( ".right ,image img ",{opacity:"0%"},{opacity:"100%",duration:"5"});
}