import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';

import IconStepContainer from './iconstep/IconStepContainer';
import IconLoadingContainer from './iconloading/IconLoadingContainer';
import IconShortNoticeContainer from './iconshortnotice/IconShortNoticeContainer';
import IconCountDownContainer from './iconcountdown/IconCountDownContainer';
import IconTabContainer from './icontab/IconTabContainer';
import IconMoreButtonContainer from './iconmorebutton/IconMoreButtonContainer'
class EtcRouter extends Component {
	render() {
		return (
			<QuerySwitch {...this.props} queryname="pagename">
				<QueryRoute component={IconStepContainer} />
				<QueryRoute path="etc/iconstep" exact component={IconStepContainer} />
				<QueryRoute path="etc/iconloading" exact component={IconLoadingContainer} />
				<QueryRoute path="etc/iconshortnotice" exact component={IconShortNoticeContainer} />
				<QueryRoute path="etc/iconcountdown" exact component={IconCountDownContainer} />
				<QueryRoute path="etc/icontab" exact component={IconTabContainer} />
				<QueryRoute path="etc/iconmorebutton" exact component={IconMoreButtonContainer} />
				<QueryRoute nomatch component={PageNotFound} />
			</QuerySwitch>
		);
	}
}

export default EtcRouter;