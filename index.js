var random1 = Math.floor(Math.random()*6)+1;  
var random2 = Math.floor(Math.random()*6)+1;

var images1 = "images/dice"+random1+".png";  //Adding image from source with concactenation.
var images2 = "images/dice"+random2+".png";  //Adding image from source with concactenation.


document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if(random1>random2){
    document.querySelector("h1").textContent="🚩Player 1 Wins";   
   }else if(random1<random2){
       document.querySelector("h1").textContent="Player 2 Wins🚩";
   }else{
       document.querySelector("h1").textContent= "Tie😬"; 
   }