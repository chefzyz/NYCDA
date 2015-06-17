var firstNum = 10;
var secondNum = 20;
var addNum = firstNum+secondNum;
console.log(addNum);

//


function userName( firstName, lastName){
	return alert(firstName, lastName);
}
userName("Elder,Azeez");


// 

function displaySomething(){
	return console.log("This will show up in the console");
}
displaySomething();

// Function Exercise

function virtualDoor(doorOne, doorTwo, doorThree){
	var userInput = prompt("Please choose a door from 1 t0 3");
	return alert("You chose Door Number:"+userInput);
	if{
		userInput == 1
		alert("You won Gold")
	}
	else if{
		userInput == 2
		alert("You won Silver")
	}
	else if{
		userInput == 3
		aler(" You won Bronze")
	}
	else{
		alert("You won nothing")
	}

}

virtualDoor();



//for Loop Exercise
var africanCountries = ["Nigeria", "Ghana", "Senegal", "Eypt", "Cameroon", "South Africa", "Mali"];
for(var i=0; i<=africanCountries.length; i++){
	console.log(africanCountries[i]);
}



//Using a while loop
var x = 99;
while(x >0){
	console.log(x + " " + "bottles of root beer on the wall," + " " + x + "bottles of root beer...take one down, pass it around" )
	x--;
}


//