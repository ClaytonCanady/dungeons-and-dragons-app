import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ConditionList extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
		};
	}
	handleChange = (e) => {
		e.preventDefault();
		this.setState({ search: e.target.value });
	};
	render() {
		let conditions = this.props.conditions.filter((condition) => {
			return (
				condition.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
				-1
			);
		});
		let list = conditions.map((condition, index) => {
			return (
				<div className='item' condition={condition[index]} key={index}>
					<Link to={/conditions/ + condition.name} condition={condition[index]}>
						<h1>{condition.name}</h1>
					</Link>
				</div>
			);
		});

		return (
			<div className='list-container'>
				<form>
					<input
						type='text'
						onChange={this.handleChange}
						placeholder='search conditions'></input>
				</form>
				{list}
			</div>
		);
	}
}

export default ConditionList;
