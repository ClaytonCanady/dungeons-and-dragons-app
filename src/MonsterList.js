import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MonsterList extends Component {
	render() {
		let list = this.props.monsters.map((monster, index) => {
			return (
				<div className='monster' monster={monster[index]} key={index}>
					<Link to={/monsters/ + monster.name} monster={monster[index]}>
						<h1>{monster.name}</h1>
					</Link>
				</div>
			);
		});

		return <div className='spell-container'>{list}</div>;
	}
}

export default MonsterList;