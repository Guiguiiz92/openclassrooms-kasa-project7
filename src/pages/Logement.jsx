import { Navigate, useParams } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import logements from '../logements.json';
import Rating from '../components/Rating';
import Carousel from '../components/Carousel';

const Logement = () => {
	const { id } = useParams();
	const logement = logements.find((element) => element.id === id);
	if (logement) {
		return (
			<div id="logement-body">
				<Carousel pictures={logement.pictures} />
				<div className="logement-txt">
					<div className="logement-txt-left">
						<h1 className="logement-title">{logement.title}</h1>
						<h2 className="logement-location">
							{logement.location}
						</h2>
						<div className="logement-liste-tag">
							{logement.tags &&
								logement.tags.map((tag, index) => {
									return (
										<div
											className="logement-tag"
											key={index}
										>
											{tag}
										</div>
									);
								})}
						</div>
					</div>
					<div className="logement-txt-right">
						<span className="logement-owner">
							{splitName(logement.host.name)}
							<div>
								<img
									src={logement.host.picture}
									alt="Face-owner"
								/>
							</div>
						</span>
						<div className="logement-rating">
							<Rating rating={logement.rating} />
						</div>
					</div>
				</div>
				<div className="logement-dropdown">
					<Dropdown
						title="Description"
						texte={[logement.description]}
					/>

					<Dropdown title="Équipements" texte={logement.equipments} />
				</div>
			</div>
		);
	} else {
		return <Navigate to="/error" />;
	}
};

function splitName(fullName) {
	const split = fullName.split(' ');
	return (
		<div className="logement-owner-name">
			<span>{split[0]}</span>
			<span>{split.slice(1).join(' ')}</span>
		</div>
	);
}

export default Logement;
