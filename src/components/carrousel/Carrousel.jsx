import '../carrousel/Carrousel.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Carrousel = (props) => {
        return(
        <section className="carrousel">
            <FontAwesomeIcon icon={faChevronLeft} className="carrousel__chevronLeft chevron" />
            <img src={props.image} className="carrousel__image" alt="cover"/>
            <FontAwesomeIcon icon={faChevronRight} className="carrousel__chevronRight chevron" />
            <p className="carrousel__index">1/4</p>
        </section>
        )
}

Carrousel.propTypes={
    image:PropTypes.string,
}

export default Carrousel