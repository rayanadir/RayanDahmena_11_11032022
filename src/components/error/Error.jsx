import '../error/Error.scss'
import { Link } from 'react-router-dom';

/**
 * 
 * @returns message d'erreur
 */
const Error = () => {
    return(
        <section className='error'>
            <div className="error__message">
                <h1 className="error__404">404</h1>
                <h3 className="error__message__text">Oups! La page que vous demandez n'existe pas.</h3>
            </div>
            <Link to='/' className="error__link">Retourner sur la page d’accueil</Link>
        </section>
    )
}

export default Error