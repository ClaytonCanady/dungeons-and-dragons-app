import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
					<div className='home'>
						<h1>The D&D SpellFinder</h1>
                       <h2>About</h2>
					   <p>I decided to create this app because I love D&D and wanted an easy way to find information on spells and other element's of D&D 5E. Currently this does not include any homebrew spells or monsters.</p>
					   <h2>Usage</h2>
					   <p>Simply select what you need to find in the nav bar above</p>
					</div>
				);
    }
}

export default Home;