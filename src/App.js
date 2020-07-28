import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import SpellList from './SpellList';
import SpellInfo from './SpellInfo';
class App extends Component {
	constructor() {
		super();
		this.state = {
			spells: [],
		};
	}
	componentDidMount() {
		fetch('https://www.dnd5eapi.co/api/spells')
			.then((results) => results.json())
			.then((results) => {
				this.setState({ spells: results.results });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		return (
			<div className='App'>
				<header>
					<h1>D&D SpellFinder</h1>
					<nav>
						<Link to='/'>
							<p>home</p>
						</Link>
						<Link to='/spell-list'>
							<p>spell list</p>
						</Link>
					</nav>
				</header>
				<main>
					<Route path='/' exact component={Home} />
					<Route
						path='/spell-list'
						render={() => {
							return <SpellList spells={this.state.spells} return />;
						}}
					/>
					<Route
						path='/info/:spellName'
						render={(routerProps) => {
							return (
								<SpellInfo
									spells={this.state.spells}
									match={routerProps.match}
									return
								/>
							);
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
