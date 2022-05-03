
var randomNumber1=Math.floor((Math.random() * 6) + 1);

var randomdice="dice"+randomNumber1+".png";
var randomImgae="images/"+randomdice;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgae);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomdice2="dice"+randomNumber2+".png";
var randomimage="images/"+randomdice2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimage);









if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="🚩Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML="🚩  Player 2 Wins";
}
else{
    document.querySelector('h1').innerHTML="Draw";
}

















// var img2=document.querySelectorAll("img")[1];
// document.querySelectorAll('img')[0].setAttribute('src',myPix[randomNumber1]);
// document.querySelectorAll('img')[1].setAttribute('src',myPix[randomNumber2]);
