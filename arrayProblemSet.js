//printReverse()	takes the array and prints the reverse. Not change it.

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([ 1, 2, 3, 4, 5]);



//isUniform()  checks if everything in the array is the same

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++)
	if (arr[i] !== first) {
		return false;
		}	
		return true;
	}
isUniform([2, 2, 2, 3]);

//sumArray  the total of all the numbers in an array

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}


//max() the largest in an array

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}