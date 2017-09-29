import "./style.scss";
import React, { Component, PropTypes } from "react";
import {
	WingBlank,
	WhiteSpace,
	SearchBar,
	Carousel,
	Card
} from "antd-mobile-web";
import cls from './cls'

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ["", "", ""],
			initialHeight: 200,
			shops: [0, 1, 2, 3]
		};
		var c = new cls() 
	}

	// refresh() {
	//        this.state.data = ["1", "2", ""]
	//    }

	render() {
		const hProp = this.state.initialHeight
			? { height: this.state.initialHeight }
			: {};
		return (
			<WingBlank>
				<WhiteSpace size="lg" />
				<SearchBar placeholder="搜索" maxLength={8} />
				<Carousel
					className="my-carousel"
					autoplay={false}
					infinite
					selectedIndex={1}
					swipeSpeed={35}
					beforeChange={(from, to) =>
						console.log(`slide from ${from} to ${to}`)}
					afterChange={index => console.log("slide to", index)}
				>
					{this.state.data.map(ii => (
						<a href="http://www.baidu.com" key={ii} style={hProp}>
							<img
								src={`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png`}
								alt="icon"
								onLoad={() => {
									// fire window resize event to change height
									window.dispatchEvent(new Event("resize"));
									this.setState({
										initialHeight: null
									});
								}}
							/>
						</a>
					))}
				</Carousel>
				<WhiteSpace size="lg" />
				{this.state.shops.map(shop => (
					<Card full>
						<Card.Header
							title="This is title"
							thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
							extra={<span>this is extra</span>}
						/>
						<Card.Body>
							<div>This is content of `Card`</div>
						</Card.Body>
						<Card.Footer
							content="footer content"
							extra={<div>extra footer content</div>}
						/>
					</Card>
				))}
			</WingBlank>
		);
	}
}

export default Index;