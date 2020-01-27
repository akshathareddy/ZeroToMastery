function targetNumberSum(array,number)
{
	debugger;
	let smallNumbers = array.filter(element=>element<number);
	let filteredArray =[];
	for(let i=0;i<smallNumbers.length;i++) 
	{
		for(let j=i+1;j<smallNumbers.length;j++)
			if(smallNumbers[i]+smallNumbers[j]==number)
				filteredArray.push([smallNumbers[i],smallNumbers[j]]);
			
	}			
	console.log(filteredArray);
}
targetNumberSum([1,2,3], 4);