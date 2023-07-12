const Rating = (props) => {
	const nbRedStar = parseInt(props.rating);

	return (
		<div>
			{new Array(5).fill(0).map((value, index) => (
				<i
					key={index}
					className={`fa-solid fa-star star ${
						index < nbRedStar ? 'red-star' : ''
					}`}
				></i>
			))}
		</div>
	);
};

export default Rating;
