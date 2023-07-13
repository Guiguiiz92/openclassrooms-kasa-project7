const Tlocation = (props) => {
	return (
		<div
			id="tlocation"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.6) ),url(${props.cover})`,
			}}
			onClick={props.handleClick}
		>
			<p id="titlelocation">{props.title}</p>
		</div>
	);
};

export default Tlocation;
