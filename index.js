var randomNumber=Math.random();
var rn=Math.floor((randomNumber*6)+1);
var ig=("dice"+rn+(".png"));

document.querySelector(".ss").setAttribute("src",ig);



var randomNumber2=Math.random();
var rn2=Math.floor((randomNumber2*6)+1);
var ig2=("dice"+rn2+(".png"));


document.querySelector(".sa").setAttribute("src",ig2);

if(rn>rn2){
    document.querySelector(".refresh").innerHTML=("<h4>Player 1 won</h4>");
}
else if  (rn<rn2){
    document.querySelector(".refresh").innerHTML=("<h4>Player 2 won</h4>");
}
else{
    document.querySelector(".refresh").innerText=("Draw")
}