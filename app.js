

const btn = document.querySelector("#mode");
const img = document.querySelector("img")


btn.addEventListener("click" , ()=>{
 document.body.classList.toggle("dark-mode");
 if( document.body.classList.contains("dark-mode") ){
  img.src = `dark.webp`
 }
})