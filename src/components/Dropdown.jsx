import React, { useState } from 'react';

const Dropdown = ({ title, texte }) => {
	const [showtexte, setShowtexte] = useState(false);

	function updateShowtexte() {
		setShowtexte(!showtexte);
	}

	return (
		<div className="dropdown">
			<div className="titre" onClick={updateShowtexte}>
				<span>{title}</span>
				{showtexte ? (
					<i className="fa-solid fa-chevron-up chevron"></i>
				) : (
					<i className="fa-solid fa-chevron-down chevron"></i>
				)}
			</div>

			{showtexte && <p className="texte">{displayLines(texte)}</p>}
		</div>
	);
};

function displayLines(lines) {
	let spanlines;
	if (lines) {
		spanlines = lines.map((value, index) => {
			return <span key={index}>{value}</span>;
		});
	}
	return spanlines;
}

export default Dropdown;
