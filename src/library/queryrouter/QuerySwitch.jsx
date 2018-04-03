import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {matchQueryString} from './matchQueryString';
import {parseQueryString} from './parseQueryString';

class QuerySwitch extends Component {
	static contextTypes = {
		router: PropTypes.shape({
			route: PropTypes.object.isRequired
		}).isRequired
	}

	static childContextTypes = {
    router: PropTypes.object.isRequired
  }

	getChildContext() {
		let query = {};
		if (this.props.location && this.props.location.query) {
			query = {...this.props.location.query};
		} else {
			query = parseQueryString(this.context.router.route.location.search);
		}
		return {
			router: {
				...this.context.router,
				route: {
					...this.context.router.route,
					location: this.props.location ? this.props.location : this.context.router.location,
					match: {
						...this.context.router.route.match,
						query: query,
					}
				}
			}
		}
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		const { route } = this.context.router;
		const { route: nextRoute} = this.context.router;
    const { queryname } = this.props;
    const location = this.props.location || route.location;
		const nextLocation = nextProps.location || nextRoute.location;

		if (this.props.onChange) {
			if (location.query[queryname] !== nextLocation.query[queryname]) {
				this.props.onChange(location, nextLocation);
			}
		}
	}

	componentWillMount() {
		const { route } = this.context.router;
		const location = this.props.location || route.location;;
		if (this.props.onChange) {
			if (typeof this.props.onChange === 'function') {
				this.props.onChange(location.prevLocation, location);
			}
		}
	}

	render() {
		const { route } = this.context.router;
		console.log('route', route)
    const { children, queryname } = this.props;
    const location = this.props.location || route.location;
		console.log('queryname', queryname)
		console.log('location', location)
		let queryMatch, child;
		React.Children.forEach(children, (elem) => {
			if (!React.isValidElement(elem)) {
				return;
			}

			const {path: pathProps, exact, from, nomatch} = elem.props;
			const path = pathProps || from;
			if (!queryMatch) {
				child = elem;
				if (nomatch) {
					queryMatch = true;
				} else {
					queryMatch = matchQueryString(location.query, queryname, {path, exact});
				}
			}
		});
		console.log('queryMatch', queryMatch)
		if (queryMatch) {
			return React.cloneElement(child, {location, computedQueryMatch:queryMatch});
		} else {
			return null;
		}
	}
}

export default QuerySwitch;