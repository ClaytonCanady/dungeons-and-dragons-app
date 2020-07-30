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
								<p>
									Home <img src={require('../src/images/home.svg')} alt='home' />
								</p>
							</Link>
							<Link to='/spell-list'>
								<p>
									Spells
									<img
										src={require('../src/images/spellbook.svg')}
										alt='spellbook'
									/>
								</p>
							</Link>
							<Link to='/monster-list'>
								<p>
									Monsters{' '}
									<img src={require('../src/images/dragon.svg')} alt='dragon' />
								</p>
							</Link>
							<Link to='/condition-list'>
								<p>
									Conditions{' '}
									<img src={require('../src/images/skull.svg')} alt='skull' />
								</p>
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
		 return <div>There seems to be a problem please try again. </div>
		}
	}
}

export default App;
