import '../header/Header.scss'
import logo from '../../assets/logo_header.png'

const Header = () => {
    return(
        <header className='header'>
            <img src={logo} className='header__logo' alt='header' />
            <nav className="header__nav">
                <li className='header__element'>Accueil</li>
                <li className='header__element'>A propos</li>
            </nav>
        </header>
    )
}

export default Header