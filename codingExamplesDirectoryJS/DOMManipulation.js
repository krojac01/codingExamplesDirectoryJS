//select
var tag = document.getElementById("highlight");


//Manipulate
tag.style.color = "blue"   // must be in quotes unlike CSS
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//as an alternative
//Rather than directily manipulating style with JS, we can define a CSS class
// and then toggle it on or off with JS.

//Define a Class in CSS

.some-class{
	color: blue;
	border: 10px solid red;
}

tag.classList.remove("another-class");
tag.classList.add("another-class");
tag.classList.toggle("another-class");  //like a todo list with a strike-thru
//classList is not an Array.  .push will not work

textContent
//Returns a string of all the text contained in a given element
	//Element is everything contained between the tags

//Example
// <p> This is an <strong> awesome </strong> paragraph </p>

//Select the <p> tag;
var tag = document.querySelector("p");
//Retrieve the textContent:
tag.textContent  //"This is an awesome paragraph"
//alter the textContent:
tag.textContent = "blah blah blah";
//also any html  entered in textContent  will be ignored and displayed as text



//innerHTML
//Similar to textContent, except it returns a string of all the HTML contained
// in a given element.

//Example
// <p> This is an <strong> awesome </strong> paragraph </p>

//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML  //keeps the strong tag when making changes, where as textContent wont

Attributes  href src  Id    class  
//Use getAttribute() and setAttribute() to read and write attributes like src and href

//Example    <a href="www.google.com">I am a link</a>
//   <img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href");   //"www.google.com"
//change Href attribute
link.setAttribute("href", "www.dogs.com");
//<a href="www.dogs.com">I ama link</a>

var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">

//Using a for loop to change anchor tags on a page

var links = document.getElementsByTagName("a");

for(var i =  0; i < links.length; i++){
	links[i].style.background = "pink";    //just example, changes all links pink
	links[i].style.border = "1px dashed purple";
	console.log(links[i].getAttribute("href", "http://www.bing.com"));
	//changes all links to bing.com
}

