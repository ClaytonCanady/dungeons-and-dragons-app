import React, { Component } from 'react';

class ConditionInfo extends Component {
	constructor() {
		super();
		this.state = {
			condition: [],
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
		return (
			<div className='info'>
				<h1>{this.state.condition.name} </h1>
        <p>{this.state.condition.desc}</p>
			</div>
		);
	}
}

export default ConditionInfo;
