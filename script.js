"use strict";

const btnsOpenModal = document.querySelectorAll(".show-modal");
const model = document.querySelector(".model");
const closeModel = document.querySelector(".close-model");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelectorAll(".hidden");

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
     const element = btnsOpenModal[i].addEventListener("click", function () {
          console.log(element, "button clicked");
          model.classList.remove("hidden");
          overlay.classList.remove("hidden");
     });

     closeModel.addEventListener("click", () => {
          // confirm("du you want to close ?");
          model.classList.add("hidden");
          overlay.classList.add("hidden");
     });
     overlay.addEventListener("click", () => {
          // confirm("du you want to close ?");
          model.classList.add("hidden");
          overlay.classList.add("hidden");
     });

    document.addEventListener('keydown' , function(e){
         console.log(e.key)
          if(e.key === 'Escape'){
               model.classList.add("hidden");
          overlay.classList.add("hidden");
          }
    })


}
