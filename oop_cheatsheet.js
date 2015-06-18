// Object Oriented Javascript Cheat-Sheet


//Constructor function
//Create an object States that takes statename, statecapital, stategov and statepop as an arguement
function States(stateName, stateCapital, stateGov, statePop){
	this.stateName = stateName;
	this.stateCapital = stateCapital;
	this.stateGov = stateGov;
	this.statePop = statePop;
}
var newState = new.States('New York','Albany','Gov. Cuomo','50 million');

