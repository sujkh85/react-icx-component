import React from 'react';
import PageNotFound from '../error/PageNotFound';
import PageNotConnect from '../error/PageNotConnect';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
import IntroContainer from '../intro/IntroContainer';
import EtcContainer from '../etc/EtcContainer';
import ButtonContainer from '../buttons/ButtonContainer';
import GridContainer from '../grid/GridContainer';
import TableContainer from '../table/TableContainer';
import ChartContainer from '../chart/ChartContainer';
import UtilContainer from '../util/UtilContainer';

const ConfigRouter = (props) => {
	return(
		<QuerySwitch {...props} queryname="pagename">
			<QueryRoute component={IntroContainer} />
      <QueryRoute path="intro" component={IntroContainer} />
			<QueryRoute path="etc" component={EtcContainer} />
			<QueryRoute path="chart" component={ChartContainer} />
			<QueryRoute path="button" component={ButtonContainer} />
			<QueryRoute path="grid" component={GridContainer} />
			<QueryRoute path="table" component={TableContainer} />
			<QueryRoute path="util" component={UtilContainer} />			
			<QueryRoute path="/notconnect" component={PageNotConnect}/>
			<QueryRoute nomatch component={PageNotFound}/>
		</QuerySwitch>
	)
}

export default ConfigRouter;
