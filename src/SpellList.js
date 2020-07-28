import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import data from './data'
class SpellList extends Component {
    constructor() {
        super();
        this.state = {
            spells: []
        };
    }
	componentDidMount() {
		fetch('https://www.dnd5eapi.co/api/spells')
			.then((results) => results.json())
			.then((results) => {
				 this.setState({ spells: results.results})
			})
			.catch((err) => {
				console.error(err);
			});
	};
	render() {
        console.log(this.state.spells);
		let list = this.state.spells.map((spell, index) => {
			return (
				<div className='spell' spell={spell[index]} key={index}>
					<Link to={/info/ + spell.name} spell={spell[index]}>
						<h1>{spell.name}</h1>
					</Link>
				</div>
			);
		});
		return <div className='spell-container'>{list}</div>;
	}
}

export default SpellList;