import React from 'react';

import 'tachyons';

const SearchBox = ({searchField,searchChange})=>{
	return(
		<div className="pa2">
		<input 
			className="pa3" 
			type="search" 
			placeholder="Search anything"
			onChange = {searchChange}
		/>
		</div>
	);
}

export default SearchBox;