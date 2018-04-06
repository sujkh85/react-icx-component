import React, { Component } from 'react';
//import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
//import {Switch , Route} from 'react-router-dom';
import Intro from './Intro';
// import ProjectLoading from './ProjectLoading';
import PageNotFound from '../error/PageNotFound';
// import {Switch , Route} from 'react-router-dom';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
class IntroRouter extends Component {
	render() {
		return (
			<QuerySwitch {...this.props} queryname="pagename">
				<QueryRoute component={Intro} />
				<QueryRoute path="intro" exact component={Intro} />
				<QueryRoute nomatch component={PageNotFound} />
			</QuerySwitch>
		);
	}
}

export default IntroRouter;