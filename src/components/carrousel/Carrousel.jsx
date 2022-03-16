import '../carrousel/Carrousel.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Carrousel = (props) => {
    return(
        <div className={`carrousel ${props.size}`}>
            <FontAwesomeIcon icon={faChevronLeft} className={`carrousel__chevronLeft__${props.size} chevron`} />
            <img src={props.image} className={`carrousel__image__${props.size}`} alt="cover"/>
            <FontAwesomeIcon icon={faChevronRight} className={`carrousel__chevronRight__${props.size} chevron`} />
            <p className={`carrousel__index__${props.size}`}>1/4</p>
        </div>
    )
}

Carrousel.propTypes={
    size:PropTypes.string,
    image:PropTypes.string,
}

export default Carrousel