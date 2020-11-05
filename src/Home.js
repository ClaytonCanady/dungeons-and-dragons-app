import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div className='home'>
				<h1 className='py-3'>Welcome</h1>
				<p>This application features filterable search. If you want to find a spell simply click the spells tab and start typing the name.</p>

				<img src={require('../src/images/background.jpg')} alt='dragons' />
				<footer>
					<div>
						Icons made by{' '}
						<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
							Freepik
						</a>{' '}
						from{' '}
						<a href='https://www.flaticon.com/' title='Flaticon'>
							www.flaticon.com
						</a>
					</div>
				</footer>
			</div>
		);
	}
}

export default Home;
