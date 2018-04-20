import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import { QuerySwitch, QueryRoute } from '../library/queryrouter/';
import GridContainer from './GridContainer'

class GridRouter extends Component {
  render() {
    return (
      <QuerySwitch {...this.props} queryname="pagename">
        <QueryRoute component={GridContainer} />
        <QueryRoute path="grid/grid" exact component={GridContainer} />
        <QueryRoute nomatch component={PageNotFound} />
      </QuerySwitch>
    );
  }
}

export default GridRouter;