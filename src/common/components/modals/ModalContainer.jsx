import React, { Component } from 'react';

class ModalContainer extends Component {
	constructor(props) {
		super(props);

		this.scrollY = 0;
	}

	componentWillMount() {
		this.scrollY = document.querySelector('body').scrollTop;
	}

	componentWillUnmount() {
		setTimeout(() => {
			document.querySelector('body').scrollTop = this.scrollY
		});
	}

	render() {
		const newProps = {
			location: this.props.location,
			history: this.props.history,
			layerKey: this.props.layerKey,
			layerCount: this.props.layerCount
		}
		return (
			<div id="lay-wrap" className="popup" style={{zIndex:this.props.layerKey}} ref={(ref) => this.divContainer = ref}>
				<div className="popup-dim">
          <div className="popup-container">
			  	{React.cloneElement(this.props.children, newProps)}
          </div>
				</div>
			</div>
		);
	}
}


export default ModalContainer
