import React from "react";
import ReactDOM from 'react-dom';
// import {AppContainer} from "react-hot-loader";
import App from "./App";
import 'babel-polyfill';

const renderComponent = (Component) => {
    ReactDOM.render(<Component/>, document.getElementById("root")
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./App", () => {
        renderComponent(App);
    });
}
