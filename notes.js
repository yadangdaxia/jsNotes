
// LOGICAL OR

var day = "Friday"; 

if (day === "Saturday" || day === "Sunday") { 
	console.log("It's the weekend!"); 
}
else {
  console.log("It's a weekday.")
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