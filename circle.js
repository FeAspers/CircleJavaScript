// JavaScript file named circle.js
var name;
name = prompt("What is your name");
document.write(name);
document.write(", I think that is a nice name.<br><br>");

// Use a loop to print a message to the screen.
var count = 10;
while (count > 0) {
	document.write(name, " there are ", count, " times left to do this.<br>");
	count = count - 1;
}

// Calculate area and circumference of a circle after prompt.
var radius = 10;
var area;
var circumference;
radius = prompt("Enter the radius of your cirlce.");
area = Math.PI * radius * radius;
circumference = Math.PI * radius * 2;
document.write("<br>Area is: ", area);
document.write("<br>circumference is: ", circumference, "<br><br>");

// Use Selection/Decision code with JavaScript.
var favTeam;
favTeam = prompt("Enter your favorite team!");
// Make a comment based on response.
if (favTeam == "Bama" || favTeam == "Alabama") {
	document.write("ummmm... give me a second to think.<br>");
	// Create a pop up box known as an alert.
	alert("War Eagle! " + favTeam + " fan.");
} else {
	document.write("Glad to hear you like a good team.");
}