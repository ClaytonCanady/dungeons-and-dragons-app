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
			return (
				<Jumbotron>
					<div className='info'>
						<h1>{this.state.spell.name}</h1>
						<ul className='pt-2'>
							<h3>Classes</h3>
							{this.state.spell.classes.map((n) => {
								return <li>{n.name}</li>;
							})}
						</ul>
						<h3>
							A lvl {this.state.spell.level} spell that takes{' '}
							{this.state.spell.casting_time} to cast. It has a range of{' '}
							{this.state.spell.range}.
						</h3>
						<h4 className='pt-3'>
							This spell requires{' '}
							{this.state.spell.material || 'no material component.'}
						</h4>
						<p className='pt-3'>{this.state.spell.desc}</p>
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
