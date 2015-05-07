//variables
var numCheeses  = 4;
var enjoyCheese = "this cheese is great!";
var hateCheese  = "this cheese is \"suspect\"";
var goodWithAppleJuice = false;

//do you like apple juice with cheese or not?
var drinksWithCheese;
goodWithAppleJuice = confirm("Do you enjoy apple juice with your cheese? Click OK for yes and cancel for no.");
if(!goodWithAppleJuice){
    drinksWithCheese = prompt("What do you drink with cheese?")
    console.log("You like to drink " + drinksWithCheese + " with your cheese.");
} else {
    console.log("Yeah. Me, too.");
}

//about the cheese
console.log("There are " + numCheeses + " types of cheese.");
console.log("Jimmy exclaimed, \"" + enjoyCheese + "\" when he ate cheese number 1.");
console.log("Sally looked at cheese number three and said, \"" + hateCheese + ".");

//which does Sally hate?
var nameCheese = prompt("What type of cheese do you think Sally disliked?");
console.log("You think Sally disliked " + nameCheese + ".");

//how many cheeses have you eaten
var numCheeseYouAte = 10;
var numCheeseYouAte = parseInt(prompt("I'm guessing you've eaten " + numCheeseYouAte + " types of cheese, how many have you actually eaten?"));
console.log("You've eaten " + numCheeseYouAte + " types of cheese.");
//is that a lot?
if(numCheeseYouAte > 10){
    console.log("That's a lot of cheese!");
} else {
    console.log("EAT. MORE. CHEESE.");
}
