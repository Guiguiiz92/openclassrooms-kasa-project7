import React, { useState } from 'react';

const Carousel = ({ pictures }) => {
	const [current, setCurrent] = useState(0);
	const length = pictures.length;
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	return (
		<div className="carousel">
			<i
				className="previous fa-solid fa-chevron-left"
				onClick={previousSlide}
			/>
			<i className="next fa-solid fa-chevron-right" onClick={nextSlide} />
			<div className="counter">
				{current + 1}/{length}
			</div>
			{pictures &&
				pictures.map((picture, index) => {
					return (
						<div
							className={
								index === current ? 'slide active' : 'slide'
							}
							style={{
								backgroundImage: `url(${picture})`,
							}}
							key={index}
						/>
					);
				})}
		</div>
	);
};

export default Carousel;
