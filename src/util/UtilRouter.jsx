import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
import ExcelContainer from './excel/ExcelContainer';

class EtcRouter extends Component {
	render() {
		return (
			<QuerySwitch {...this.props} queryname="pagename">
				<QueryRoute component={ExcelContainer} />
				<QueryRoute path="util/excel" exact component={ExcelContainer} />
				<QueryRoute nomatch component={PageNotFound} />
			</QuerySwitch>
		);
	}
}

export default EtcRouter;