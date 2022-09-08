var n=(Math.floor(Math.random()*6))+1;
console.log(n);
var dice1="images/"+"dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice1);

var n2=(Math.floor(Math.random()*6))+1;
console.log(n);
var dice2="images/"+"dice"+n2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2);

if (dice2>dice1) {
  document.querySelector("h1").innerHTML="Player 2 is winner !"
}
else if(dice2<dice1) {
  document.querySelector("h1").innerHTML="Player 1 is winner"
}
else {
    document.querySelector("h1").innerHTML="Draw!"
}
