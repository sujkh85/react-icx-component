import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';

import IconDonutChartContainer from './icondonutchart/IconDonutChartContainer';

class EtcRouter extends Component {
	render() {
		return (
			<QuerySwitch {...this.props} queryname="pagename">
				<QueryRoute component={IconDonutChartContainer} />
				<QueryRoute path="chart/icondonut" exact component={IconDonutChartContainer} />
				
				<QueryRoute nomatch component={PageNotFound} />
			</QuerySwitch>
		);
	}
}

export default EtcRouter;