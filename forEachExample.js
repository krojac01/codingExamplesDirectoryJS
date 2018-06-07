//for loop

var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}

//using forEach

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(colors){
	console.log(colors);
});

//another forEach

var nums = [45, 65,77,34]

nums.forEach(function (num) {
	console.log(num);
});


function myForEach(arr, func){
	for(var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}
var colors = ["red", "orange", "yellow"];
myForEach(colors, alert)

myForEach(colors, function(color){
	console.log(color);
})

Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	}
}

var friends = ["Charlie", "Tommy", "Michael", "Dave"];

friends.myForEach(function(name)){
	console.log("Hello " + name);
}