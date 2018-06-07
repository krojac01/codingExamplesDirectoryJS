var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
		addToDo();
	}	else if(input === "delete"){
		deleteToDo();
	}
	input = prompt("What would you like to do?");
}
console.log("Ok good bye");

function listTodos(){
	console.log("**********")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("**********")
}

function addToDo(){
	var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("Added a new ToDo");
}

function deleteToDo(){
		var index = prompt("Enter index of todo to delete");
		todos.splice(index, 1);
		//splice takes 2 arguments,what to del and how many following
		console.log("Deleted ToDo!");
}