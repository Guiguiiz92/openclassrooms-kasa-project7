const Banner = (props) => {
	return (
		// <div
		// 	id="banner"
		// 	className={props.className}
		// 	style={{
		// 		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3) ), url(${props.img})`,
		// 	}}
		// >
		<div className="banner">
			<img
				id="bannerImg"
				className={props.className}
				src={props.img}
				alt="toto"
			/>
			<div className="filigrane" />
			<div id="bannerTexte">
				{props.txt &&
					props.txt.map((value, index) => {
						return <span key={index}>{value}</span>;
					})}
			</div>
		</div>
		// </div>
	);
};

export default Banner;
