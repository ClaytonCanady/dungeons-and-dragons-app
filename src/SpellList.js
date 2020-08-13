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

	// Hou comment: favor descriptive variable names over single-letter variable names
	handleChange = ((event) => {
		event.preventDefault()
		this.setState({search: event.target.value})
	})

	render() {
		let spells = this.props.spells.filter((spell) => {
			return spell.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
		})
		let list = spells.map((spell, index) => {
			// Hou comment: destructure `spell` so that we don't have to
			// repeatedly access the name property in the spell object
			const {
				name,
			} = spell;

			return (
				// Hou comment: let's use more semantic tags. Also
				// for seo reasons, it's unadvisable to have multiple h1 
				// tags on the page.
				<li className='item' spell={spell[index]} key={`${name}-${index}`}>
					<a>
						<Link to={`/info/${name}`} spell={spell[index]}>
							{name}
						</Link>
					</a>
				</li>
			);
		});
		
		return (
			<div className='list-container'>
				<form>
					{/* Hou comment: Put props on separate lines for better readability */}
					<input 
						type='text'
						onChange={this.handleChange}
						placeholder='Search Spells' />
				</form>
				<ul>
					{list}
				</ul>
			</div>
		);
	}
}

export default SpellList;