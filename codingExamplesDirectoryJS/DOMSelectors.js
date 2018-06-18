var tag = document.getElementById("highlight");  //the "highlight" is on the html file
// takes a string argument and returns the one element with a matching ID


var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);
// takes a string argument and returns a list of elements that have a matching class


var tags = document.getElementsByTagName("li");
//returns a list of all elements of a given tag name, like li or h1


querySelector - returns the first element that matches a given
CSs-style selector.

var tag = document.querySelector("#highlight");
// there is a querySelectorAll  It selects them all.

// example of class selector: class .bolded
// example of ID selector: id #highlight



//exercise
//example for below <p id="first" class ="special">Hello</p>

document.getElementsByTagName("p")[0];
document.querySelector("p");

document.getElementById("first");
document.querySelector("#first");

document.getElementsByClassName("special")[0];
document.querySelector(".special")  // dot for class selector

