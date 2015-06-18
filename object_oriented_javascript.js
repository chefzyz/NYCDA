
//-----------------------------------------------------------------

var fruits_selection = {
	name: 'Orange', 
	seed_or_no_seed: 'have seed'
}

//


function FootballClub(clubname, coach){
	this.clubname=clubname;
	this.coach=coach;
}

var club_aresenal =  new FootballClub('Aresenal', 'Arsene Wenger');
var club_barca = new FootballClub('Barcelona' , 'Luis Enrique');

//----------------------------------------------------------------


//-----------------------------------------------------------------

function Countries(countryname, capital){
	this.countryname = countryname;
	this.capital = capital;
}

var country_usa = new Countries('USA', 'Washington D.C');
console.log(country_usa.capital);


//---------------------------------------------------------------------

function Countries(countryname, capital, population){
	this.countryname = countryname;
	this.capital = capital;
	this.population = population;
	this.best_country = function(){
		return countryname + " is the best country in the world!";
	}
}

myCountry = new Countries('USA','Washington D.C');

Countries.prototype.my_population = function(){
	return this.countryname + "  has a population of " + this.population + " " + " million people";

}

anotherCountry = new Countries('USA', 'Washington D.C', '300');

//-------------------------------------------------------------------------------


function Food(foodName, foodType){
	this.foodName = foodName;
	this.foodType = foodType;
	this.whatFood = function(){
		return this.foodName + "  is a type of " + this.foodType;
	}

}

function Protein(){
	Food.apply()
}
}