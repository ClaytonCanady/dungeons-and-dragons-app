import React, { Component } from 'react';
import { Jumbotron, Spinner } from 'react-bootstrap';

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
			// Hou comment: let's destructure this.state.spell!
			const {
				casting_time,
				desc,
				level,
				material,
				name,
				range,
			} = this.state.spell;
			
			return (
				<Jumbotron>
					<div className='info'>
						<h2>{name}</h2>
						<h3>
							{name} is a Lvl {level} spell
							that takes {casting_time} to cast. It has a range
							of {range}.
						</h3>
						<h4>
							This spell requires a material component of{' '}
							{material || 'nothing.'}
						</h4>
						<p>{desc}</p>
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

export default SpellInfo;
