// ----Object Oriented Javascript Cheat-Sheet------------------------------------------


//-----Using Object literals-------------------------------

/* //---Object Literal Syntax----

***Object literals are defined using the following syntax rules:

1) A colon separates property name[1] from value.
2) A comma separates each name-value pair from the next.
3) There should be no comma after the last name-value pair. */

var fruits_selection = {
	name: 'Orange', 
	seed_or_no_seed: 'have seed'
}


/*Object literal property values can be of any data type, 
including array literals, functions, and nested object literals. 
Here is another object literal example with these property types: */

var CookChicken = {
	ingredients:['Chicken Breast','Olive Oil','Salt','Pepper','Garlic','Rosemary','Butter'], // Array literal
	numOfServings: '2',
	cookTemp: [300,350], // Another Array literal
	heatTempAlert: function(){   // Function in an Object literal
		if(cookTemp < cookTemp.indexOf[0] ){
			alert("Cooking Temperature is too low");
		}
	else if( cookTemp > cookTemp.indexOf[1]){
		alert('Cooking Temperature is too High');
	}
	return alert("Normal Cooking Temperature");
	},

	stoveControl: {   // Nested Object literal
		on: true,
		off: false
	}
};



// Creating Objects using Constructor function 

function States(stateName, stateCapital, stateGov, statePop){
	this.stateName = stateName;
	this.stateCapital = stateCapital;
	this.stateGov = stateGov;
	this.statePop = statePop;
}

//We create a new instance of "States" Object and pass in the required arguements


var myState = new.States('New York','Albany','Gov. Cuomo','50 million');


// Access the Objects attributes and method by Calling the object and appending a . and then the attribute(s) we're calling

CookChicken.ingredients // This would display all the elements in the ingredients array: 'Chicken Breast', 'Olive Oil'....etc











//  Multiplier

function Multiplier(someNumber){
	this.someNumber = someNumber,
 this.multiply = function(anotherNum){
	 this.someNumber = anotherNum * 1;
	 }
	 return this.someNumber;
	this.getCurrentValue = function(){
	return this.someNumber;
	}
};


// Record Player

function Jukebox(Record(Title, Artist)){
	console.log(Record);
	this.Record = function(Title, Artist){
		return Title + " " + Artist;
	}
	
}

var myJuke = new Jukebox(Record(GUNIT, 50Cent));