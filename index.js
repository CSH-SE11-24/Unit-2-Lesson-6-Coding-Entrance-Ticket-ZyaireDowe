// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let num=29

// Prompt the user to guess the number
let user=prompt("guess the number")

// Cast the user input to a number
parseInt()


// Create a new variable called attempts and set it to 0
let attempts=0

// Create a while loop that runs while the user guess is not equal to your number
while (user!==num){
  user= prompt("wrong, guess again")
  parseInt()
  
  if(user<"num")
    console.log("to low, try again!")
  
  if (user>"num")
    console.log("to high, try again!")
  
else (user=="num")
  console.log("you got it right!!!")
  
  attempts= attempts + 1
}

// In the while loop, prompt the user to guess the number again (remember to cast)


// In the while loop, increase the attempts by 1

// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 

console.log("it took, (attempts) attempts" )
