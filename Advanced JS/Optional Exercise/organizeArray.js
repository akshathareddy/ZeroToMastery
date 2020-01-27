function checkType(arr)
{
	let numberArray = [];
	let stringArray = [];
	arr.forEach(element=>{
		if(typeof element === 'number')
			numberArray.push(element);
		else
			stringArray.push(element);
	})
	return [numberArray,stringArray];
}

const organizedArray = checkType([1, "2", "3", 2]);
console.log(organizedArray);