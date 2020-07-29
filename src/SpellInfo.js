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
		return (
			<div className='spell-info'>
				<h2>{this.state.spell.name}</h2>
				<h3>
					{this.state.spell.name} is a Lvl {this.state.spell.level} spell that takes {this.state.spell.casting_time} to cast. It has a range of {this.state.spell.range}.
				</h3>
        <h4>This spell requires a material component of {this.state.spell.material || 'nothing.'}</h4>
				<p>{this.state.spell.desc}</p>
			</div>
		);
	}
}

export default SpellInfo;
