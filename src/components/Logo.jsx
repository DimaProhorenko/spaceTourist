import { Link } from 'react-router-dom';
import logoImg from '../assets/shared/logo.svg';
import { HOME } from '../constants/routes';

function Logo() {
	return (
		<Link to={HOME}>
			<img src={logoImg} alt="SpaceTourist Home page" />
		</Link>
	);
}
export default Logo;
