const messi = document.getElementById("messi");
const ney = document.getElementById("ney");
const suarez = document.getElementById("suarez");
const reset = document.getElementById("btn-reset");

messi.addEventListener("click", () => {
  document.getElementById("messi").style = "display:none";
});

ney.addEventListener("click", () => {
  document.getElementById("ney").style = "display:none";
});

suarez.addEventListener("click", () => {
  document.getElementById("suarez").style = "display:none";
});

reset.addEventListener("click", () => {

const imgs = document.querySelectorAll("img");

imgs.forEach((imgs) => {
    imgs.style.display = "block"
    
 } )


    
})