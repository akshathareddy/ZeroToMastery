import React from 'react';
import Cards from './Cards';

const CardList = ({robots}) =>{
	// if(true)
	// 	throw new Error("You got it wrong");
	return(
		<div>
		{
			
			robots.map((user,index)=>
			 {
			 	return(
			 		<Cards 
			 			key= {index} 
			 			id= {robots[index].id} 
			 			name={robots[index].name} 
			 			email={robots[index].email}
			 		/>
			 	); 
			 })
		}
		</div>	
	);	
}
export default CardList;