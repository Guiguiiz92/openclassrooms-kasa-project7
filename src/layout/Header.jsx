import { Link, useLocation } from 'react-router-dom';
const image = require('../images/kasa.png');
const Header = () => {
	const location = useLocation();

	return (
		<header>
			<div>
				<Link to="/home">
					<img src={image} alt="Logo Kasa" />
				</Link>
			</div>
			<nav>
				<ul>
					<li
						className={
							location.pathname === '/home' ? 'nav-active' : ''
						}
					>
						<Link to="/home">Accueil</Link>
					</li>
					<li
						className={
							location.pathname === '/about' ? 'nav-active' : ''
						}
					>
						<Link to="/about">A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
