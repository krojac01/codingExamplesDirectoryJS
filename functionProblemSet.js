var isEven = function(num){
	if(num % 2 === 0){
		return true;
	} 	else {
		return false
	}
}

//Another way to above

function isEven(num) {
	return num % 2 === 0;
}


function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}



//replace method

function kebabToSnake(str){
	var newstr = str.replace(/-/g, "_");
return newstr;
}