import React, { Component, PropTypes } from "react";

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ["", "", ""],
			initialHeight: 200,
			shops: [0, 1, 2, 3]
		};
	}

	render() {
		return (
			 <div>welcome to here!</div>
		);
	}
}

export default Index;