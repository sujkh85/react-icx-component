import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {matchQueryString} from './matchQueryString';
// import StartsWith from '../StartsWith';

class QueryRoute extends Component {

	static contextTypes = {
		router: PropTypes.shape({
			history: PropTypes.object.isRequired,
			route: PropTypes.object.isRequired,
			staticContext: PropTypes.object
		})
	}

	static childContextTypes = {
		router: PropTypes.object.isRequired
	}

	constructor(props, context) {
		super(props, context);

		this.state = {
			queryMatch: this.computeMatch(props, context.router)
		}
	}

	matchQueryString(query, queryName, {path, exact}) {
		if (exact) {
			if (query[queryName].toLowerCase() === path.toLowerCase()) {
				return true;
			}
		} else {
			return query[queryName].toLowerCase().startsWith(path.toLowerCase());
		}
	}

	computeMatch({ computedQueryMatch, location, path, queryName, exact }, { router }) {
    if (computedQueryMatch) {
			 // <QuerySwitch> 존재할때 computedMatch를 사용한다 //
      return computedQueryMatch;
		}

		return path ? matchQueryString(location.query, queryName, {path, exact}) : router.match
  }

	getChildContext() {
    return {
      router: {
        ...this.context.router,
        route: {
          location: this.props.location || this.context.router.route.location,
					match: this.context.router.route.match,
          queryMatch: this.state.match
        }
      }
    }
  }

	componentWillReceiveProps(nextProps, nextContext) {
		this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    })
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const { route } = this.context.router;
		const { route: nextRoute} = nextContext.router;
    const location = this.props.location || route.location;
		const nextLocation = nextProps.location || nextRoute.location;

		if (nextProps.onChange && typeof nextProps.onChange === 'function') {
			if (location.search !== nextLocation.search) {
				nextProps.onChange(location, nextLocation);
			}
		}
	}

	componentWillMount() {
		const { route } = this.context.router;
    const location = this.props.location || route.location;

		if (this.props.onChange && typeof this.props.onChange === 'function') {
				this.props.onChange(undefined, location);
		}
	}

	render() {
		const { queryMatch } = this.state
		const { children, component, render } = this.props;
		const { history, route, staticContext } = this.context.router;
		const location = this.props.location || route.location
		const props = { location, history, staticContext }
		if (component) {
			return (queryMatch ? React.createElement(component, props) : null);
		} else if (render) {
			return (queryMatch ? render(props) : null)
		} else {
			if (children) {
				if (typeof children === 'function') {
					return children(props);
				} else if (!Array.isArray(children) || children.length) {
					return React.Children.only(children);
				}
			}
		}
		return null;
	}
}

export default QueryRoute;