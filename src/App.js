import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import SpellList from './SpellList';
import SpellInfo from './SpellInfo';
import MonsterList from './MonsterList';
import MonsterInfo from './MonsterInfo';
import ConditionList from './ConditionList';
import ConditionInfo from './ConditionInfo';
// Hou comment: Great job leveraging react-bootstrap for your app!
import { Button, Nav, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hou comment: As a follow up challenge, I'd encourage you to 
// learn about and refactor your entire app using React Hooks!
class App extends Component {
	constructor() {
		super();
		this.state = {
			spells: null,
			monsters: null,
			conditions: null,
		};
	}
	componentDidMount() {
		// Hou comment: You could potentially refactor your multiple fetch calls and make them more succinct by using the Promise.all() method: https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/

		// Hou comment: as a follow up challenge, read about the async/await pattern and try to refactor
		// your fetch call to use that pattern: https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp

		fetch('https://www.dnd5eapi.co/api/monsters')
			.then((results) => results.json())
			.then((results) => {
				this.setState({ monsters: results.results });
			})
			.catch((err) => {
				console.error(err);
			});
		fetch('https://www.dnd5eapi.co/api/spells')
			.then((results) => results.json())
			.then((results) => {
				this.setState({ spells: results.results });
			})
			.catch((err) => {
				console.error(err);
			});
		fetch('https://www.dnd5eapi.co/api/conditions')
			.then((results) => results.json())
			.then((results) => {
				this.setState({ conditions: results.results });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	// Hou comment: you could use destructuring to extract your state into variables at the top of the function, so you don't have to access them repeatedly in this.state
	// const {
	//  conditions,
	// 	monsters,
	// 	spells
	// } = this.state;
	// Then you could do:
			// <SpellInfo
			// spells={spells}
			// match={routerProps.match}
			// />
	// As a follow-up challenge, consider refactoring all your components to use this destructuring pattern.
	render() {
		if (this.state.monsters && this.state.spells && this.state.conditions) {
			return (
				<div className='App'>
					<header>
						<h1>D&amp;D SpellFinder</h1>
						<Nav variant="tabs">
							<Link to='/'>
								<Button variant='dark'>
									Home{' '}
									<img src={require('../src/images/home.svg')} alt='home' />
								</Button>
							</Link>
							<Link to='/spell-list'>
								<Button variant='dark'>
									Spells
									<img
										src={require('../src/images/spellbook.svg')}
										alt='spellbook'
									/>
								</Button>
							</Link>
							<Link to='/monster-list'>
								<Button variant='dark'>
									Monsters{' '}
									<img src={require('../src/images/dragon.svg')} alt='dragon' />
								</Button>
							</Link>
							<Link to='/condition-list'>
								<Button variant='dark'>
									Conditions{' '}
									<img src={require('../src/images/skull.svg')} alt='skull' />
								</Button>
							</Link>
						</Nav>
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
						<Route
							path='/monster-list'
							render={() => {
								return <MonsterList monsters={this.state.monsters} return />;
							}}
						/>
						<Route
							path='/monsters/:monsterName'
							render={(routerProps) => {
								return (
									<MonsterInfo
										monsters={this.state.monsters}
										match={routerProps.match}
										return
									/>
								);
							}}
						/>
						<Route
							path='/condition-list'
							render={() => {
								return (
									<ConditionList conditions={this.state.conditions} return />
								);
							}}
						/>
						<Route
							path='/conditions/:conditionName'
							render={(routerProps) => {
								return (
									<ConditionInfo
										conditions={this.state.conditions}
										match={routerProps.match}
										return
									/>
								);
							}}
						/>
					</main>
				</div>
			);
		} else {
			// Hou comment: Nice!
			return(
				<Spinner animation='border' role='status'>
					<span className='sr-only'>Loading...</span>
				</Spinner>
			)
		}
	}
}

export default App;
