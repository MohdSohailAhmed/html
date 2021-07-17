var secretNumber= 4
var guess = prompt("Guess the secret number, it ranges between 1 to 10 ");
if (guess==secretNumber)
{
	alert("you got it right")
}

else if (guess > secretNumber){
	alert("Its too high, try again")
}
else 
{
	alert("Its too low, try again")
}
