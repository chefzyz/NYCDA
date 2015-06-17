$(document).ready(function(){
function displayTime(){
		// Add Zero to seconds and minutes if less than 10
	function addZero( myTime){
	if( myTime < 10 ){
		myTime = "0" + myTime;
		}
		return myTime;
	}

	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var milliseconds = currentTime.getMilliseconds();
	var clockDiv = document.getElementById('clock');
	clockDiv.innerText = hours + ":" + addZero(minutes) + ":" + addZero(seconds) + ":" + milliseconds;
	setInterval(displayTime, 1000);
	if(minutes %4==0){
	$('body').css({"background-color": "red"});
	}
	else if(minutes %4==1){
		$('body').css({"background-color": "blue"});
	}
	else if(minutes %4==2)
		$('body').css({"background-color": "green"});
	else{
		$('body').css({"background-color": "orange"});
	}
}

displayTime();
});


var meridiem = "AM";
if (hours > 12){
	hours = hours - 12;
	meridiem = "PM";
}
if(hours === 0){
	hours = 12;
}