import React, { Component } from 'react';

class MonsterInfo extends Component {
	constructor() {
		super();
		this.state = {
			monster: [],
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
		console.log(this.state.monster);
		return (
			<div className='info'>
				<h2>{this.state.monster.name}</h2>
				<h4>
		This size {this.state.monster.size} {this.state.monster.type} has a challenge rating of {this.state.monster.challenge_rating} and an Alignment of {this.state.monster.alignment}.
				</h4>
				<p>
					This creature's languages are {this.state.monster.languages || 'none'}.
				</p>
			</div>
		);
	}
}

export default MonsterInfo;
