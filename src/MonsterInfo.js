import React, { Component } from 'react';
import { Jumbotron, Spinner } from 'react-bootstrap';

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
				<Jumbotron>
					<div className='info'>
						<h2>{this.state.monster.name}</h2>
						<h4 className='pt-3'>
							This {this.state.monster.size} {this.state.monster.type} has a
							challenge rating of {this.state.monster.challenge_rating} and an
							alignment of {this.state.monster.alignment}. It is worth{' '}
							{this.state.monster.xp}xp.
						</h4>
						<p className='pt-3'>
							This creature's languages are{' '}
							{this.state.monster.languages || 'none'}.
						</p>
						<h4 className='pt-3'>Stats</h4>
						<ul>
							<li>Strength: {this.state.monster.strength}</li>
							<li>Constitution: {this.state.monster.constitution}</li>
							<li>Dexterity: {this.state.monster.dexterity}</li>
							<li>Intelligence: {this.state.monster.intelligence}</li>
							<li>Wisdom: {this.state.monster.wisdom}</li>
							<li>Charisma: {this.state.monster.charisma}</li>
						</ul>
						<ul className='pt-2'>
							<h3>Special Abilities</h3>
							{this.state.monster.special_abilities &&
								this.state.monster.special_abilities.map((n) => {
									return (
										<li>
											{n.name}: {n.desc}
										</li>
									);
								})}
						</ul>
					</div>
				</Jumbotron>
			);
		} else {
			return (
				<Spinner animation='border' role='status'>
					<span className='sr-only'>Loading...</span>
				</Spinner>
			);
		}
	}
}

export default MonsterInfo;
