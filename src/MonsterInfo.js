import React, { Component } from 'react';

class MonsterInfo extends Component {
	constructor() {
		super();
		this.state = {
			monster: null,
		};
	}
	componentDidMount() {
		const thisMonster = this.props.monsters.filter((monster) => {
			return monster.name === this.props.match.params.monsterName;
		})[0];
		fetch(`https://www.dnd5eapi.co${thisMonster.url}`)
			.then((results) => results.json())
			.then((results) => {
				this.setState({ monster: results });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
	if (this.state.monster) {
		
		return (
			<div className='info'>
				<h2>{this.state.monster.name}</h2>
				<h4>
					This size {this.state.monster.size} {this.state.monster.type} has a
					challenge rating of {this.state.monster.challenge_rating} and an
					Alignment of {this.state.monster.alignment}.
				</h4>
				<p>
					This creature's languages are {this.state.monster.languages || 'none'}
					.
				</p>
				<h4>Stats</h4>
				<ul>
					<li>Strength: {this.state.monster.strength}</li>
					<li>Constitution: {this.state.monster.constitution}</li>
					<li>Dexterity: {this.state.monster.dexterity}</li>
					<li>Intelligence: {this.state.monster.intelligence}</li>
					<li>Wisdom: {this.state.monster.wisdom}</li>
					<li>Charisma: {this.state.monster.charisma}</li>
				</ul>
			</div>
		);
	} else {return <div>There seems to be a problem please try again. </div>}
	}
}

export default MonsterInfo;
