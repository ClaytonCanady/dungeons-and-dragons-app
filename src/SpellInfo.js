import React, { Component } from 'react';

class SpellInfo extends Component {
	constructor() {
		super();
		this.state = {
			spell: [],
		};
	}
	componentDidMount() {
		const thisSpell = this.props.spells.filter((spell) => {
			return spell.name === this.props.match.params.spellName;
		})[0];
		fetch(`https://www.dnd5eapi.co${thisSpell.url}`)
			.then((results) => results.json())
			.then((results) => {
				this.setState({ spell: results });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		console.log(this.state.spell);
		return (
			<div className='spell-info'>
				<h2>{this.state.spell.name}</h2>
				<p>{this.state.spell.desc}</p>
			</div>
		);
	}
}

export default SpellInfo;
