// Javascript Assingment Day 6

// Add two numbers

var x = 5;
var y = 20;
console.log(x+y);


// String Concatenation

var firstName="Elder";
var lastName="Azeez";
alert(firstName + " " + lastName);

// Multi-Dimensional Arrays

var countriesCapital = [["Nigeria", "Canada", "Norway", "England", "Turkey"],["Abuja", "Ottawa", "Oslo","London","Ankara"]];
console.log( countriesCapital[0][0], "=>", countriesCapital[1][0]);

// Check if variable is less than 10
var myNum = 4;
if(myNum < 10){
	alert("Number is less than 10");
}
else{
	alert(myNum + " is greater than 10");
}

// Check if two strings are the same

var firstWord = "Apple";
if(firstWord == "Apple"){
	alert(" The two words are the same");
}
else{
	alert("The two words are different");
}

// Function that displays what a user typed in

function getName(){
	var yourName = prompt("What's your name?:");
	return console.log("Your Name is: " + yourName);
}
getName();


// Funtion that takes no arguement

function whoamI(){
	return console.log("You are Elder Azeez");
}
whoamI();


// Virtual Door

function myVirtualDoor(){
	var doorOptions = ["1", "2", "3"];
	var getDoor = prompt("Choose from Doors 1 - 3:");
	if( getDoor = doorOptions[0]){
		console.log("You won Gold");
	}
	else if( getDoor = doorOptions[1] ){
		console.log("You won Silver");
	}
	else if( getDoor = doorOptions[2]){
		console.log("You won Bronze");
	}
	else{
		console.log("Sorry, you won Nothing");
	}
}