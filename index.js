//SLIDER 
//node list of all images in class of slides t ostart

const slides=document.querySelectorAll(".slides img");
let slideIndex=0;

//set interval will give an ID, so we'll let something to work with

let intervalId=null;

//make it sothat all dom content loads first befor image shows

document.addEventListener("DOMContentLoaded",initializeSlider); //wait for all dom contnet ot load, then show first img with function


function initializeSlider(){

   if(slides.length>0){
      slides[slideIndex].classList.add("displaySlide");

      intervalId=setInterval(nextSlide,3000); //interval has ID of 5 , with this ID we can access it, 
       //console.log(intervalId);
   }

}


function showSlide(index){

   if(index >=slides.length){
      slideIndex=0;

   } else if(index<0){
      slideIndex=slides.length-1; //set it to end, allowing a loop

   }


   slides.forEach(slide=>{
      slide.classList.remove("displaySlide"); //so previous one wont be shown on CSS
   });
   slides[slideIndex].classList.add("displaySlide"); //we need to reset it so it wont go to lines we dont show


}

function nextSlide(){
   clearInterval(intervalId);
slideIndex++;
showSlide(slideIndex);

}

function prevSlide(){
   clearInterval(intervalId);
   slideIndex--;
   showSlide(slideIndex);
}