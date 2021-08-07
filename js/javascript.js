function getText() {

	var listWho = [
	  "Astronaut",
	  "Alien",
	  "Doctor",
	  "Scientist",
	  "Actor",
	  "Writer",
	  "Photographer",
	  "Pilot",
	  "Self",
	  "Kid",
	  "Animal",
	  "Teacher",
	  "Police officer",
	  "Fire fighter",
	  "Nurse",
	  "Ninja",
	  "Dinosaur",
	  "Robot"
	]

	var listWhat = [
	  "Sleeping",
	  "Walking",
	  "Running",
	  "Standing",
	  "Looking",
	  "Exploring",
	  "Creating",
	  "Observing",
	  "Jumping",
	  "Eating"
	]

	var listWhere = [
	  "Home",
	  "Office",
	  "Laboratory",
	  "Factory",
	  "Underwater",
	  "Space",
	  "Alien Planet/Moon",
	  "Solar System Planet/Moon",
	  "School",
	  "The Park",
	  "The Pool"
	]

	var listWhen = [
	  "Past",
	  "Present",
	  "Future",
	  "Day",
	  "Night",
	  "After school"
	]

	var listHow = [
	  "Car",
	  "Spaceship",
	  "Horse",
	  "Airplane",
	  "Firetruck",
	  "Police Car",
	  "Bicycle",
	  "Motorcycle",
	  "Unicycle",
	  "Dinosaur",
	  "Boat",
	  "Seaplane"
	]

	  var randomNumber_Who = Math.floor(Math.random() * (listWho.length));
	  var randomNumber_What = Math.floor(Math.random() * (listWhat.length));
	  var randomNumber_Where = Math.floor(Math.random() * (listWhere.length));
	  var randomNumber_When = Math.floor(Math.random() * (listWhen.length));
	  var randomNumber_How = Math.floor(Math.random() * (listHow.length));
	  
	  document.getElementByID("displayWho").innerHTML = who[randomNumber_Who];
	  document.getElementByID("displayWhat").innerHTML = who[randomNumber_What];
	  document.getElementByID("displayWhere").innerHTML = who[randomNumber_Where];
	  document.getElementByID("displayWhen").innerHTML = who[randomNumber_When];
	  document.getElementByID("displayHow").innerHTML = who[randomNumber_How];

  }