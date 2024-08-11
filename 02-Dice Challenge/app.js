//first Dice Random Image
const randomNum = Math.floor(Math.random() * 6) + 1;//1-6
const randomDiceImage = "dice" + randomNum + ".png";//dice1.png - dice6.png
const randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
const image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource)


//second Dice Random Image
const randomNum2 = Math.floor(Math.random() * 6) + 1;//1-6
// const randomDiceImage2 = "dice" + randomNum2 + ".png";//dice1.png - dice6.png
const randomImageSource2 = "images/dice" + randomNum2 + ".png"; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


if(randomNum > randomNum2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if (randomNum2 > randomNum){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML= "Draw!"
}