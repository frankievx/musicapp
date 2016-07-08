import React, { Component, PropTypes } from 'react';
import Header from './MainHeader';
import Body from './MainBody';

export default class Main extends Component {
  render() {
  	const { results, externalSearch } = this.props;
    return (
      <div className="w-col w-col-6 main">
      	<Header results={results}
                externalSearch={externalSearch}/>
      	<Body />
			</div>
    );
  }
}