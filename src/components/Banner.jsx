const Banner = ({ className, img, txt }) => {
	return (
		<div className={'banner ' + className}>
			<img id="bannerImg" src={img} alt="toto" />
			<div className="filigrane"></div>
			<div id="bannerTexte">
				{txt &&
					txt.map((value, index) => {
						return <span key={index}>{value}</span>;
					})}
			</div>
		</div>
	);
};

export default Banner;
