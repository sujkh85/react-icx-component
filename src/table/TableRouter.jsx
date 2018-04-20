import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import { QuerySwitch, QueryRoute } from '../library/queryrouter/';
import TableContainer from './TableContainer'

class TableRouter extends Component {
  render() {
    return (
      <QuerySwitch {...this.props} queryname="pagename">
        <QueryRoute component={TableContainer} />
        <QueryRoute path="table/table" exact component={TableContainer} />
        <QueryRoute nomatch component={PageNotFound} />
      </QuerySwitch>
    );
  }
}

export default TableRouter;