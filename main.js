/*------------------ Display scroll-to-top ----------------------------*/ 
window.scrollBy(500, 200)
let btnScroll = document.querySelector(".scroll-to-top");

window.onscroll = function(){
   if(window.scrollY >= 1500){
      console.log(window.scrollY);
      btnScroll.style.display = "block";
   }
   else{
      btnScroll.style.display = "none"
   }
}

btnScroll.onclick = function(){
   window.scrollTo({
      left:0,
      top:0,
      behavior:"smooth"
   })
}