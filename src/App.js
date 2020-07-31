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
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

	render() {
		if (this.state.monsters && this.state.spells && this.state.conditions) {
			return (
				<div className='App'>
					<header>
						<h1>D&D SpellFinder</h1>

						<nav>
							<Link to='/'>
								<Button variant='info'>
									Home{' '}
									<img src={require('../src/images/home.svg')} alt='home' />
								</Button>
							</Link>
							<Link to='/spell-list'>
								<Button variant='info'>
									Spells
									<img
										src={require('../src/images/spellbook.svg')}
										alt='spellbook'
									/>
								</Button>
							</Link>
							<Link to='/monster-list'>
								<Button variant='info'>
									Monsters{' '}
									<img src={require('../src/images/dragon.svg')} alt='dragon' />
								</Button>
							</Link>
							<Link to='/condition-list'>
								<Button variant='info'>
									Conditions{' '}
									<img src={require('../src/images/skull.svg')} alt='skull' />
								</Button>
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
			return <div>Loading...</div>;
		}
	}
}

export default App;
