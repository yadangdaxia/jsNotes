
// SETTING VARIABLES AND IF/ELSE STATEMENTS

var weather = "rainy";
var sky = "sunny";

if (weather ==="rainy", sky ==="sunny") {
  console.log("It's rainy and sunny");
}
  else {
    console.log("Weather is unknown.");
  }



// USING THE LOGICAL AND

var rain = true;
var wind = true;

if (rain && wind) {
  console.log("It's nasty weather out there.")
}


// USING THE LOGICAL OR

var rain = true;
var wind = false;

if (rain || wind) {
  console.log("It's nasty weather out there.")
}




// CONSOLE PRINTS OUT SOMETHING UNEXPECTED - Why do I get "Happy weekend." ? 

var day = "Monday";

if (day === "Saturday" || "Sunday") {
  console.log("Happy weekend.")
}
else {
	console.log("It's the weekday.")
}


// CHECK CORRECT SYNTAX BELOW-//

var day = "Monday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Happy weekend.")
}
else {
  console.log("It's the weekday.")
}







//  for (INIT; BREAK CONDITION; POST-ITERATION) {
//  SOMETHING TO DO;
//  }

var students = ["john", "paul", "ringo", "george"];

for (var i = 0; i < students.length; i += 1) {
	console.log(i);
}


//  PRINTS ALL ELEMENTS OF STUDENTS VARIABLE
for (var i = 0; i < students.length; i += 1) {
	console.log(students[i]);
}


//  WHILE AND FOR - A MATTER OF PREFERENCE
var students = ["john", "paul", "ringo", "george"];

var i = 0;

while (i <students.length) {
  console.log(students[i]);
  i += 1;
}


//  STARTS WITH "B"

var ben = "Ben";
var bob = "Bob";
var john = "John";

var bNames = "";

if (ben[0] === "B") {
	bNames = ben + " " + bNames;
}
if (bob[0] === "B") {
	bNames = bob + " " + bNames;
}
if (john[0] === "B") {
	bNames = john + " " + bNames;
}

console.log(bNames.trim())




//  STARTS WITH "B", SIMPLIFIED
// PUT ALL VARIABLES INTO AN ARRAY, CREATE NEW VARIABLE

var nombre = ["Ben", "Bob", "John", "Broadzilla" ];
var bNames = " ";


// RUN A FOR LOOP ON EACH ELEMENTS IN ARRAY, STARTING AT 0  

for (var i = 0; i < nombre.length; i += 1) {
	if (nombre[i][0] === "B") {
		bNames = nombre[i] + " " + bNames;
	}
}

console.log(bNames.trim());

// NOTE: SOMETIMES MY CODE DOESN'T SEEM TO FUNCTION, 
// BUT WHEN REPASTING IT IN FROM SUBLIME IT IS OK (?)



//FUNCTIONS (LIKE A BLACK BOX, PUT SOMETHING IN AND GET OUT A RETURN STATEMENT)
//FUNCTION EXAMPLE: FUNCTION NAME IS fullName, ARGUMENTS ARE first AND last.
//THIS FUNCTION CONCATENATES TWO STRINGS



function fullName(first,last) {		//2. gets arguments
	var nombre = first + " " + last;	//3. does  the concatenation
	return nombre;	//4. returns the value
}

console.log(fullName("John", "Lennon")); //1. calls the function fullName / 5. outputs







function firstCharacterFilter(element, character) {
	var azNames = "";

	for (var i = 0; i < element.length; i += 1) {
		if (element[i][0] === character) {
			azNames = element[i] + " " + azNames;
	}
}
return azNames.trim();
}

var names = ["Bob", "John", "Gertrude", "Gary", "Bun-bun", "Steve", "Jackson", "Grapel"];
console.log(firstCharacterFilter(names, "G"));