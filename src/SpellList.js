import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import data from './data'
class SpellList extends Component {

	render() {
		let list = this.props.spells.map((spell, index) => {
			return (
				<div className='spell' spell={spell[index]} key={index}>
					<Link to={/info/ + spell.name} spell={spell[index]}>
						<h1>{spell.name}</h1>
					</Link>
					
				</div>
			);
		});
		
		return (
			<div className='spell-container'>
				{list}
			
			</div>
		);
	}
}

export default SpellList;