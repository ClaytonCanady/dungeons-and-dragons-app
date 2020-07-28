import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import data from './data'
class SpellList extends Component {
    render() {
        let list = data.map((spell, index) => {
return (
	<div className='spell' spell={spell[index]}>
		<Link to={/info/ + spell.name} spell={spell[index]} >
			<h1>{spell.name}</h1>
		</Link>
	</div>
);
        }) 
        return (
            <div className='spell-container'>
                {list}
            </div>
        );
    }
}

export default SpellList;