//var body = document.querySelector("body");
var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){   //document.body.style.background also works
	if(isPurple){
		document.body.style.background = "white";
		//isPurple = false;
	}	else{
		document.body.style.background = "purple";
		//isPurple = true;
	}
		isPurple = !isPurple;
});


//Version 2 with class added to html

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});