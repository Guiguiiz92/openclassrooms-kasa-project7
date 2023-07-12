const image = require('../images/KasaFooter.png');
const Footer = () => {
	return (
		<footer>
			<img
				onClick={() => {
					window.scrollTo(0, 0);
				}}
				src={image}
				alt="Logo Kasa"
			/>

			<p id="texteFooter">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
