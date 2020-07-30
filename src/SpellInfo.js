import React, { Component } from 'react';

class SpellInfo extends Component {
	constructor() {
		super();
		this.state = {
			spell: null,
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
		if (this.state.spell) {
			return (
				<div className='info'>
					<h2>{this.state.spell.name}</h2>
					<h3>
						{this.state.spell.name} is a Lvl {this.state.spell.level} spell that takes {this.state.spell.casting_time} to cast. It has a range of {this.state.spell.range}.
					</h3>
			<h4>This spell requires a material component of {this.state.spell.material || 'nothing.'}</h4>
					<p>{this.state.spell.desc}</p>
				</div>
			);
			} else {return  <div>There seems to be a problem please try again. </div> }
	}
}

export default SpellInfo;
