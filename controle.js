






// Obtener elementos del DOM
const audio = document.querySelector('.aud');
let box = document.querySelector(".main .boxs .box");
const btns = document.querySelectorAll('.boxs .btn1');
let grd = document.querySelectorAll(".grid .boxs .box");
let auds = document.querySelectorAll(".grid .boxs .box .aud");
let btn = document.querySelector('.boxs .btn1 active');

const icon = document.getElementById('icon');
const inpt = document.getElementById('inpt');
const search = document.querySelector('.container .search form input[type ="search" ]');
console.log(search)

// search
icon.onclick =(function(){
   search.classList.toggle('active');
   console.log(search)
});
// search
grd.forEach(function(ele){
   ele.onclick = function() {
    
    // audactive.play();
    auds.forEach(function (ele) {
      
      ele.pause();
    })
    grd.forEach(function (ele) {
      ele.classList.remove("active");
      
    })
     
    this.classList.add('active');

    
   this.querySelector('.box .aud').play();
 
   }
   
})
// pause audio

let bool = true
btns.forEach( function(ele){
   ele.onclick = function(){
      
      auds.forEach(function(elem) {
             elem.pause();
           });
   grd.forEach(function (el) {
       
      el.classList.remove("active");
     
           
      });
   }
});


   
  

 
   



    
  
