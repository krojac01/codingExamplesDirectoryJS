var movies = [
{
	title: "The Hands of Fate", 
	rating: 0,
	seen: false 
},
{
	title: "Staying Alive",
	rating: 0,
	seen: true
},
{
	title: "Atlas Shrugged",
	rating: 2,
	seen: false
},
{
	title: "Bucky Larson",
	rating: 3,
	seen: true
},
{
	title: "Ballistic",
	rating: 4,
	seen: false
}

]

movies.forEach(function(movie){  //version 1
	var result = "You have ";
	if(movie.seen){
		result += "watched ";
		} else {
			result += "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		console.log(result)
})


// version 2

function buildString(movie){
	var result = "You have ";
	if(movie.seen){
		result += "watched ";
		} else {
			result += "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		return result;
}
movies.forEach(function(movie){
	console.log(buildString(movie));
});

//both versions work and do same thing. 2nd version creates a function
// to build the string. 



