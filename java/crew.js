let jop_title=document.querySelector(" #jop");
let name_title=document.querySelector(".hero_section_crew .left_crew h2");
let text_title=document.querySelector(".hero_section_crew .left_crew p");
let personal_picture=document.querySelector(".hero_section_crew .right_crew img");
let crew_api_json=new XMLHttpRequest();
let circle_browse=document.querySelectorAll(".hero_section_crew .left_crew .circles span ");
const  mediaQuery = window.matchMedia("(max-width: 768px)");

let maindata=[];
crew_api_json.open("GET","../json/crew.json",true);
crew_api_json.send();
crew_api_json.onreadystatechange=function(){
    if(this.status===200&&this.readyState===4){
         maindata=JSON.parse(crew_api_json.responseText);
        for(let i=0;i<maindata.length;i++){
           circle_browse.forEach((ele)=>{
            ele.addEventListener("click",(e)=>{
      circle_browse.forEach((ele)=>{
            ele.classList.remove("active")
    })
      e.currentTarget.classList.add("active");
                if(e.currentTarget.id==maindata[i].id){
                   jop_title.innerHTML=maindata[i].jop;
                   name_title.innerHTML=maindata[i].name;
                   text_title.innerHTML=maindata[i].details;
                   if(mediaQuery.matches===true){
                    personal_picture.src=maindata[i].image_media;
                   }else{
                     personal_picture.src=maindata[i].image_desktop;
                   }
                  
                }
            })
           })
            
        }
        
    }
};

//to make  animation to the  image

circle_browse.forEach((ele)=>{
  ele.addEventListener("click",()=>{
     gsap.fromTo(personal_picture,{opacity:0},{opacity:1,duration:5,ease:"power2.out"});
  })
})
