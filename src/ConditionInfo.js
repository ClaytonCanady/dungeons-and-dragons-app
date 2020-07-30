import React, { Component } from 'react';

class ConditionInfo extends Component {
	constructor() {
		super();
		this.state = {
			condition: null,
		};
	}
	componentDidMount() {
		const thisCondition = this.props.conditions.filter((condition) => {
			return condition.name === this.props.match.params.conditionName;
		})[0];
		fetch(`https://www.dnd5eapi.co${thisCondition.url}`)
			.then((results) => results.json())
			.then((results) => {
				this.setState({ condition: results });
			})
			.catch((err) => {
				console.error(err);
			});
	}
	render() {
		if (this.state.condition) {
			
			return (
				<div className='info'>
					<h1>{this.state.condition.name} </h1>
			<ul>{this.state.condition.desc.map((element, index) => {
				return <li key={index}>
					{element}
				</li>
			}
			)}</ul>
				</div>
			);
		} else {
	 return <div>Loading...</div>
		}
	}
}

export default ConditionInfo;
