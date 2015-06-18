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
        console.log("The String" + " " +getString + " " + "does not have a Vowel in it");
        }
}
checkForVowel();

// Display alert when a button is clicked

$(document).ready(function(){
            $("#myForm").submit(function(){
    if($("#myName").val() == "Azeez"){
        alert("Welcome Azeez");
    }
    else{
        alert("Go Away" + $("#myName").val());
    }
    return false;
})
});

// Validate Date Input

// Find frequent in array

function findFrequent(){
var myArray=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 2, 2, 2, 3, 2];  
var mf = 1;  
var m = 0;  
var item;  
for (var i=0; i<myArray.length; i++)  
{  
        for (var j=i; j<myArray.length; j++)  
        {  
                if (myArray[i] == myArray[j])  
                 m++;  
                if (mf<m)  
                {  
                  mf=m;   
                  item = myArray[i];  
                }  
        }  
        m=0;  
}  
alert(item+" ( " +mf +" times ) ") ;  
}


// ----Ten Simple Javascript Exercises---

// Find the larger number
function max(firstNum, secondNum){
if(firstNum > secondNum ){
    console.log(firstNum +  "is greater");
}
else if( secondNum > firstNum){
    console.log(secondNum + " is greater");
}
else{
    console.log(" The two numbers are the same");
}
}
max(firstNum,secondNum);

// Largest of three numbers

function maxOfThree(firstNum, secondNum, thirdNum){
    if(firstNum > secondNum && firstNum > thirdNum){
        console.log(firstNum + "is the largest");
    }
    else if( secondNum > firstNum && secondNum > thirdNum){
        console.log(secondNum + "is the largest");
    }
    else if( thirdNum > firstNum && thirdNum > secondNum){
        console.log(thirdNum +  "is the largest");
    }
    else if ( firstNum == secondNum && firstNum == thirdNum ){
        console.log("All of the numbers are the same");
    }
    else if(firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum){
        console.log("Two of the numbers are the same");
    }
}

// Check for Vowel

function checkForVowel()
{
var getString = prompt("Enter a word: ");  
        if(getString.match(/[aeiouAEIOU]/))
        {
        return true;
    }
    return false;
}
checkForVowel();

// Translate Function

function translate(someWord){

}


// Max of Three

function maxOfThree(num1,num2,num3){
    return max(max(num1,num2), num3));
}



//