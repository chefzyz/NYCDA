// For Loop

var usStates = [["New York", "Oregon", "Florida","Texas"], ["Albany", "Portland", "Miami", "Austin"]];
for(i=0; i < usStates.length; i++){
	for(x=0; x <usStates.length; x++){

	}
	console.log(usStates[i][x]);
}


// While Loop

var x = 100;
while ( x > 0 ){
	 x--;
     console.log( x +" bottle(s) of beer on the wall,");
     console.log( x +"bottle(s) of beer");
     console.log("Take one down, pass it around,");
}

// Global Scope

var favFood = "Fish and Rice";

function displayMyFood(){
	return console.log("I love" + favFood)
}
displayMyFood();

// Local Scope
function showCar(){
	var nameOfCar ="Toyota";
	console.log("My car is " + nameOfCar);
}
showCar();



// Check if word is Palindrome
    function checkPalindrome(){
        var getString = prompt("Enter A Word");
        for (i = 0; i < getString.length; i++) {
            if (getString.charAt(i) != getString.charAt(getString.length-1-i)) {
                return console.log( getString + "is not a palindrome");
            }
        }
        return console.log(true;
    }
	checkPalindrome();

// Find vowels in a string

function checkForVowel()
{
var getString = prompt("Enter a word: ");  
        if(getString.match(/[aeiouAEIOU]/))
        {
        console.log("The String" +" " +getString + " " + "has a Vowel in it");
        }
        else {
        console.log("The String" + " " +getString + " " + "has not a Vowel in it");
        }
}
checkForVowel();

// Display alert when a button is clicked


