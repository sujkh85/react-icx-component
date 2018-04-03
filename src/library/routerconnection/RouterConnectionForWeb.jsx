import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import {parseQueryString} from '../queryrouter/parseQueryString';
import PropTypes from 'prop-types';

class RouterConnectionForWeb extends Component {
	render() {
		return (
			<Router history={this.props.history} basename={this.props.basename}>
					<Route render={(props) => {
						const newProps = {
							...props,
							location: {
								...props.location,
								query:parseQueryString(props.location.search),
								prevLocation: this.prevLocation
							}
						};
						this.prevLocation = {...props.location, query:parseQueryString(props.location.search)};
						return React.createElement(this.props.component, newProps);
					}}
					/>
			</Router>
		);
	}
}

RouterConnectionForWeb.propTypes = {
	basename: PropTypes.string,
	history: PropTypes.object.isRequired
}

RouterConnectionForWeb.defaultProps = {
	basename: ''
}

export default RouterConnectionForWeb
