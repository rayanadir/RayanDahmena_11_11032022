import '../error/Error.scss'

const Error = () => {
    return(
        <section className='error'>
            <div className="error__message">
                <p className="error__404">404</p>
                <p className="error__message__text">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <p className="error__link">Retourner sur la page d’accueil</p>
        </section>
    )
}

export default Error