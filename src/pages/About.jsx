import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import { INFOS } from '../constants';
const image = require('../images/BannerAbout.png');

const About = () => {
	return (
		<div>
			<Banner className="bannerAbout" img={image} />

			<div className="banner-dropdown">
				{INFOS.map((value, index) => {
					return (
						<Dropdown
							key={index}
							title={value.title}
							texte={[value.texte]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default About;
