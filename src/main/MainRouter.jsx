import React, { Component } from 'react';
//import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
//import {Switch , Route} from 'react-router-dom';
import Main from './Main';
// import ProjectLoading from './ProjectLoading';
import PageNotFound from '../error/PageNotFound';
// import {Switch , Route} from 'react-router-dom';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
class LoginRouter extends Component {
	render() {
		console.log(this.props)
		return (
			<QuerySwitch {...this.props} queryname="pagename">
				<QueryRoute component={Main} />
				<QueryRoute path="main" exact component={Main} />
				<QueryRoute nomatch component={PageNotFound} />
			</QuerySwitch>
		);
	}
}

export default LoginRouter;