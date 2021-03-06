import React from 'react';
import PageNotFound from '../error/PageNotFound';
import PageNotConnect from '../error/PageNotConnect';
import { QuerySwitch, QueryRoute } from '../library/queryrouter/';
import IntroContainer from '../intro/IntroContainer';
import EtcContainer from '../etc/EtcContainer';
import ButtonContainer from '../buttons/ButtonContainer';
import ChartContainer from '../chart/ChartContainer';
import UtilContainer from '../util/UtilContainer';

const ConfigRouter = props => {
  return (
    <QuerySwitch {...props} queryname="pagename">
      <QueryRoute component={EtcContainer} />
      <QueryRoute path="intro" component={IntroContainer} />
      <QueryRoute path="etc" component={EtcContainer} />
      <QueryRoute path="chart" component={ChartContainer} />
      <QueryRoute path="button" component={ButtonContainer} />
      <QueryRoute path="util" component={UtilContainer} />

      <QueryRoute path="/notconnect" component={PageNotConnect} />
      <QueryRoute nomatch component={PageNotFound} />
    </QuerySwitch>
  );
};

export default ConfigRouter;
