import Banner from '../components/Banner';
import Tlocation from '../components/Tlocation';
import logements from '../logements.json';
import { useNavigate } from 'react-router-dom';
const image = require('../images/BannerHome.png');

const Home = () => {
	const navigate = useNavigate();
	const onLogementClick = (id) => {
		navigate(`/logement/${id}`);
	};
	return (
		<div>
			<Banner img={image} txt={['Chez vous,', 'partout et ailleurs']} />
			<div id="homeBackground">
				{logements &&
					logements.map((logement) => {
						return (
							<Tlocation
								key={logement.id}
								title={logement.title}
								cover={logement.cover}
								handleClick={() => onLogementClick(logement.id)}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Home;
