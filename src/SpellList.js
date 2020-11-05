import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import data from './data'
class SpellList extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		}
	}
handleChange = ((e) => {
e.preventDefault()
this.setState({search: e.target.value})
})

	render() {
		let spells = this.props.spells.filter((spell) => {
			return spell.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
		})
		let list = spells.map((spell, index) => {
			return (
				<div className='item' spell={spell[index]} key={index}>
					<Link to={/info/ + spell.name} spell={spell[index]}>
						<h1>{spell.name}</h1>
					</Link>
					
				</div>
			);
		});
		
		return (
			<div className='list-container'>
				<form className='pt-3'>
					<input
						type='text'
						onChange={this.handleChange}
						placeholder='
					Search Spells'></input>
				</form>
				{list}
			</div>
		);
	}
}

export default SpellList;