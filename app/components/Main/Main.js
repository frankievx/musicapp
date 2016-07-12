import React, { Component, PropTypes } from 'react';
import Header from './MainHeader';
import Body from './MainBody';

export default class Main extends Component {
  render() {
  	const { results, queue, externalSearch, enqueue } = this.props;
    return (
      <div className="w-col w-col-6 main">
      	<Header results={results}
                externalSearch={externalSearch}
                enqueue={enqueue}/>
      	<Body queue={queue}/>
			</div>
    );
  }
}