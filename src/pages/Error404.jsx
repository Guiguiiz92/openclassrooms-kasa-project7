import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div id="error404-wrapper">
			<div id="error404-wrapper__title">404</div>
			<div id="error404-wrapper__txt">
				Oups! La page que vous demandez n'existe pas.
			</div>
			<div id="error404-wrapper__txt-back">
				<Link to="/home">Retourner sur la page d'accueil</Link>
			</div>
		</div>
	);
};

export default Error404;
