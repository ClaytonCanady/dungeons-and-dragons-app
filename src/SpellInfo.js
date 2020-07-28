import React, { Component } from 'react';

class SpellInfo extends Component {
	render() {
		const thisSpell = this.props.spells.filter((spell) => {
			return spell.name === this.props.match.params.spellName;
		})[0];
		return (
			<div className='spell-info'>
				<h1>{thisSpell.name}</h1>
			</div>
		);
	}
}

export default SpellInfo;