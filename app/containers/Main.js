import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../components/Main/MainHeader';
import Body from '../components/Main/MainBody';


export default class Main extends Component {
  render() {
    return (
      <div className="w-col w-col-6 main">
      	<Header />
      	<Body />
			</div>
    );
  }
}
