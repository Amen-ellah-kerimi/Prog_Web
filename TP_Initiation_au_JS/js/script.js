//alert("hello from JS!")
//window.document.write("<h2> Hello From JS! </h2>")
//age = prompt("Donner votre age","12")
//if(age<20){
//    document.write("Votre age est: "+age+", vous etes trés jeunes")
//}else {
//    document.write("votre age est: "+age+", vous etes adulte")
//}
//for(i=0;i<10;i++){document.write("bonjour!")}

window.onload= function(){
  document.getElementById("titre").innerHTML = "Bienvenue sur ma premiere page en HTML CSS JavaScript";
  document.getElementById("message").innerHTML="Bonjour amen ellah";
}
alert("bonjour votre nom")

//! EX2
//! 1)
document.addEventListener("DOMContentLoaded", function() {
  let titre = document.getElementById("titre");
  if (titre) {
      titre.addEventListener("click", function() {
          titre.classList.toggle("text-change");
      });
  }
});
//! 2)
let i = 0;
let images = ["images/devweb1.png"];
function change(){
  document.getElementById('devweb').setAttribute('src',images[0]);
}
