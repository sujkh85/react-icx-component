import React, { Component } from 'react';
import PageNotFound from '../error/PageNotFound';
import { QuerySwitch, QueryRoute } from '../library/queryrouter/';
import ButtonContainer from './ButtonContainer'

class ButtonRouter extends Component {
  render() {
    return (
      <QuerySwitch {...this.props} queryname="pagename">
        <QueryRoute component={ButtonContainer} />
        <QueryRoute path="button/button" exact component={ButtonContainer} />
        <QueryRoute nomatch component={PageNotFound} />
      </QuerySwitch>
    );
  }
}

export default ButtonRouter;