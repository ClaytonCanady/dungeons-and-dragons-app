import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import SpellList from './SpellList';
class App extends Component {
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
					<Route path='/spell-list' component={SpellList} />
				</main>
			</div>
		);
	}
}

export default App;
