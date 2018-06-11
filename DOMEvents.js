element.addEventListener(type, functionToCall);


var button = document.querySelector("button");
button.addEventListener("click", function(){
	console.log("Someone Clicked the Button!");
});


<button> Click Me </button>
<p>No One Has Clicked Me Yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function(){
	paragraph.textContent = "Someone Clicked the Button!";
});
