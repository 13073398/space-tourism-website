//set  code of  planet inforamtion
let planet_image=document.querySelector(".hero_section_destination .left img");
let title=document.querySelector(".info .title h2");
let middle_article=document.querySelector(".middle p");
let left_side_two=document.querySelector(".bottom .left_section h4");
let right_side_two=document.querySelector(".bottom .right_section h4");
let planets=document.querySelectorAll(".hero_section_destination .right ul li ");
const  mediaQuery = window.matchMedia("(max-width: 768px)");


//make json request
let Article_api=new XMLHttpRequest();
Article_api.open("GET","../json/destionation.json",true);
Article_api.send();
//function to read json file  anf make effect on html page
let Article_api_arry
Article_api.onreadystatechange=function(){
 if(Article_api.status===200 && Article_api.readyState===4){
  Article_api_arry=JSON.parse(Article_api.responseText);
   
 }
};
 planets.forEach((ele)=>{
   ele.addEventListener("click",(e)=>{
      planets.forEach((ele)=>{
         ele.classList.remove("active");
      })
      e.currentTarget.classList.add("active");
      for(let i=0;i<Article_api_arry.length;i++){
         if(e.currentTarget.id==Article_api_arry[i].id){
            title.innerHTML=Article_api_arry[i].title;
            middle_article.innerHTML=Article_api_arry[i].content;
            left_side_two.innerHTML=Article_api_arry[i].left_title_two;
            right_side_two.innerHTML=Article_api_arry[i].right_title_two;
          
            
            if(mediaQuery.matches===true){
                  planet_image.src=Article_api_arry[i].image_media
            }else{
                planet_image.src=Article_api_arry[i].image_desktob
            }
         }
      }
   })
 })
 //to make  animation to the image 
 planets.forEach((ele)=>{
   ele.addEventListener("click",()=>{
      gsap.fromTo(".hero_section_destination .image img",{opacity:0,y:"-100%",rotation:0},{opacity:1,y:"0%",duration:5,rotation:360,ease:"bounce"});
    
   })
 })
 window.onload=function(){
       gsap.fromTo(".hero_section_destination .image img",{opacity:0,y:"-100%",rotation:0},{opacity:1,y:"0%",duration:5,rotation:360,ease:"bounce"});
 }


