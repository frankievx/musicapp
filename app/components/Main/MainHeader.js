import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import Option from './Option'
import styles from 'react-select/dist/react-select.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.setValue = function (option){};
		this.renderOption = function (option) {
			return <span><img src={option.snippet.thumbnails.default.url}></img>{option.snippet.title}</span>
		};
		this.renderValue = function (option) {
			return <span><strong>{option.snippet.title}</strong></span>
		}
	}
	static propTypes = {
		externalSearch: PropTypes.func.isRequired,
		enqueue: PropTypes.func.isRequired,
		results: PropTypes.object.isRequired

	};


	render() {
		const { options, isFetching, isInvalidated } = this.props.results
		const { externalSearch, enqueue } = this.props
		const asd = 'this'
		// console.log(options)
		return (
			<div className="main-header">
				<Select className='Select'
								name="Search"
								value='search'
								valueKey='snippet'
								options={options}
								optionRenderer={this.renderOption}
								onChange={enqueue}
								valueRenderer={this.renderValue}
								onInputChange={(input) => {
									externalSearch(input)
									return input;
								}}
								isLoading={isFetching}

				/>

			</div>
		);
	}
}