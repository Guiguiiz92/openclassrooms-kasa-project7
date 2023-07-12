const Tlocation = (props) => {
	return (
		<div
			id="tlocation"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.6) ),url(${props.cover})`,
			}}
			onClick={props.handleClick}
		>
			<div id="titlelocation">{props.title}</div>
		</div>
	);
};

export default Tlocation;
