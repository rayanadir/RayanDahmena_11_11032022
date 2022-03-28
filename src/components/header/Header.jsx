import '../header/Header.scss';
import logo from '../../assets/logo_header.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
            <header className='header'>
                <Link to='/'>
                    <img src={logo} className='header__logo' alt='header' />
                </Link>
                <nav className="header__nav">
                    <Link to='/' className='header__element'>Accueil</Link>
                    <Link to='/about' className='header__element'>A propos</Link>
                </nav>
            </header>
    )
}

export default Header