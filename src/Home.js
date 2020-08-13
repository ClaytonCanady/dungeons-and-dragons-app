import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div className='home'>
				<h1>The D&D SpellFinder</h1>
				<h2>About</h2>
				<p>
					I decided to create this app because I love D&D and wanted an easy way
					to find information on spells and other element's of D&D's 5th
					Edition. Currently this does not include any homebrew spells or
					monsters.
				</p>
				<img src={require('../src/images/background.jpg')} alt='dragons' />
				<footer>
					Icons made by{' '}
					<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
						Freepik
					</a>{' '}
					from{' '}
					<a href='https://www.flaticon.com/' title='Flaticon'>
						www.flaticon.com
					</a>
				</footer>
			</div>
		);
	}
}

export default Home;
