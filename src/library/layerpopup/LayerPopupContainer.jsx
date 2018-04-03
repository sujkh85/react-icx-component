import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {EventName} from './EventName';
import {LayerKeyGen} from './LayerKeyGen';
// import * as ConfigAction from '../../config/ConfigAction';

class LayerPopupContainer extends Component {
	// static contextTypes = {
	// 	router: React.PropTypes.shape({
	// 		route: React.PropTypes.object.isRequired
	// 	}).isRequired
	// }

	constructor(props) {
		super(props);

		this.fireLayerEvent = this.fireLayerEvent.bind(this);

		Object.keys(EventName).forEach((name, idx) => {
			document.addEventListener(name, this.fireLayerEvent, false);
		})

		this.state = {
			reload: 0
		};

		this.layers = {};
	}

	fireLayerEvent(evt) {
		if (evt.type === EventName.showLayer) {
			this.layers = {
				...this.layers,
				[evt.detail.layerKey]:evt.detail.layerComponent
			}
		} else if (evt.type === EventName.hideLayer) {
			delete this.layers[evt.detail.layerKey];
		} else if (evt.type === EventName.clearLayer) {
			this.layers = {};
		}

		this.setState({reload: this.state.reload + 1});
	}

	componentDidUpdate(prevProps, prevState) {
		if (Object.keys(this.layers).length === 0) {
			LayerKeyGen.reset();
		}
	}

	componentWillUnmount() {
		Object.keys(EventName).forEach((name, idx) => {
			document.removeEventListener(name, this.fireLayerEvent, false);
		})
	}

	render() {
		return (
			<div>
				{
					Object.keys(this.layers).map((layerKey, i) => {
						//const { route } = this.context.router;
						let layerProps = {
							key: layerKey,
							layerKey,
							// location: this.props.location || route.location,
							history: this.props.history ,
							layerCount: Object.keys(this.layers).length,
							
						}
						if (this.layers[layerKey]) {
							if ( typeof this.layers[layerKey] === 'function') {
								return this.layers[layerKey](layerProps);
							} else {
								return React.cloneElement(this.layers[layerKey], layerProps);
							}
						} else {
							return null
						}
					})
				}
			</div>
		);
	}
}


export default LayerPopupContainer