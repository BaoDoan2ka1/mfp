import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (ele) => {
	ReactDOM.render(<App />, ele);
};

if (process.env.NODE_ENV === "development") {
	const devRoot = document.getElementById("_Marketing_dev_root");
	if (devRoot) mount(devRoot);
}

export { mount };