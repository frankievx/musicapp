import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import styles from 'react-select/dist/react-select.css';

export default class Header extends Component {
	static propTypes = {
		externalSearch: PropTypes.func.isRequired,
		results: PropTypes.object.isRequired
	};

	render() {
		const { options, isFetching, isInvalidated } = this.props.results
		const { externalSearch } = this.props
		const asd = 'this'
		console.log(externalSearch)
		return (
			<div className="main-header">
				<Select className='Select'
								name="Search"
								value='search'
								options={options}
							
								onInputChange={(value) => { 
									externalSearch(value)
									return value;
								}}
								isLoading={isFetching}

				/>

			</div>
		);
	}
}