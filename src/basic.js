import React, {
	Component,
	PropTypes
} from "react";

class Basic extends Component {
	static defaultProps = {
		global: true,
		display: true
	}
	constructor(props) {
		super(props);
	}

	render() {
		return ( < div > < b > welcome to here! < /b></div > );
	}
}

export default Basic;