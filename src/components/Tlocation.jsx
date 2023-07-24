const Tlocation = ({ cover, handleClick, title }) => {
	return (
		<div
			id="tlocation"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.6) ),url(${cover})`,
			}}
			onClick={handleClick}
		>
			<p id="titlelocation">{title}</p>
		</div>
	);
};

export default Tlocation;
