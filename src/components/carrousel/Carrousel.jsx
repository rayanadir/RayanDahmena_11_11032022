import '../carrousel/Carrousel.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carrousel = (props) => {
    return(
        <div className='carrousel'>
            <FontAwesomeIcon icon={faChevronLeft} className="carrousel__chevronLeft chevron" />
            <img src={props.image} className="carrousel__image" alt="cover"/>
            <FontAwesomeIcon icon={faChevronRight} className="carrousel__chevronRight chevron" />
            <p className='carrousel__index'>1/4</p>
        </div>
    )
}

export default Carrousel