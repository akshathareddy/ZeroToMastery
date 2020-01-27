function findTheIndex(array, index){
	//debugger;
	let first = -1;
	let last = -1;
	for(let i=0; i<array.length; i++)
	{
		if(array[index]==array[i])
		{
			if(first==-1)
				first = i;
			else
				last = i;
		}
		else
			break;
	}

	return [first,last];
}
function cleanTheRoom(arr){
	//debugger;
	let sortedArray = arr.sort((a,b)=>a-b);
	let newArray = [];
	let indexes = [];
	while(sortedArray.length>0)
	{
		indexes = findTheIndex(sortedArray,0);
		let firstOccurance = indexes[0];
		let lastOccurance = indexes[1];
		if(firstOccurance!==-1 && lastOccurance!== -1)
			newArray.push(sortedArray.splice(firstOccurance,lastOccurance+1));
		else if(lastOccurance==-1)
		{
			newArray.push(sortedArray[0]);
			sortedArray.splice(0,1);
		}
			
	}
	return newArray;
}
const cleanedArray = cleanTheRoom([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);
console.log(cleanedArray);