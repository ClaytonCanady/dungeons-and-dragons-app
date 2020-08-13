import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Hou comment: This component looks similar to SpellList - take a look at my comments on the SpellList component and see if you can refactor MonsterList similarly?
class MonsterList extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
		};
	}
	handleChange = (e) => {
		e.preventDefault();
		this.setState({ search: e.target.value });
	};
	render() {
			let monsters = this.props.monsters.filter((monster) => {
				return (
					monster.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
					-1
				);
			});
		let list = monsters.map((monster, index) => {
			return (
				<div className='item' monster={monster[index]} key={index}>
					<Link to={/monsters/ + monster.name} monster={monster[index]}>
						<h1>
							{monster.name}
						</h1>
					</Link>
				</div>
			);
		});

		return (
			<div className='list-container'>
				<form>
					<input
						type='text'
						onChange={this.handleChange}
						placeholder='Search Monsters'></input>
				</form>
				{list}
			</div>
		);
	}
}

export default MonsterList;