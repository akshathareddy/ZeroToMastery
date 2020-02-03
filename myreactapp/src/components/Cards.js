import React,{Component} from 'react';


class Cards extends Component{
	render({id,name,email}=this.props){
		return(
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
				<img alt='Robo' src={`https://robohash.org/${id}?size=200x200`} />
				<React.Fragment>
					<p>{name}</p>
					<p>{email}</p>
				</React.Fragment>
			</div>
		);
	}
}

export default Cards;