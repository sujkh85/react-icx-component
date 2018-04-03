import React, { Component } from 'react';
import {connect} from 'react-redux';
import { LayerPopupContainer } from './library/layerpopup';
import ConfigRouter from './config/ConfigRouter';
// import WaitContainer from './common/components/waitcircle/WaitContainer';
// import ProjectLoader from './common/ProjectLoader';
// import StorageListener from './library/icopstorage/StorageListener'
// import CustomListener from './library/CustomListener';
//import SpinController from './library/spin/SpinController';

class PageContainer extends Component {
	constructor(props) {
		super(props);
		this.reloadTime = '';
	}

	// componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.location.search !== this.props.location.search) {
	// 		window.scrollTo(0, 0);
	// 	}
	// }	

	componentDidMount() {
		//SpinController.showSpin();
	}

	render() {
    console.log('inin?')
		return (
			<div>
				{/* <StorageListener />
				<CustomListener /> */}
				<ConfigRouter {...this.props} />			
				<LayerPopupContainer {...this.props}/>
				{/* <ProjectLoader />
				<WaitContainer /> */}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

	}
}

export default connect(null, mapDispatchToProps)(PageContainer);
