import '../carrousel/Carrousel.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Carrousel = (props) => {
    if(props.type==="about"){
        return (<img src={props.image} className="about_image"  alt="about" />)
    }else if(props.type==="cover"){
        return(
        <div className="carrousel">
            <FontAwesomeIcon icon={faChevronLeft} className="carrousel__chevronLeft chevron" />
            <img src={props.image} className="carrousel__image" alt="cover"/>
            <FontAwesomeIcon icon={faChevronRight} className="carrousel__chevronRight chevron" />
            <p className="carrousel__index">1/4</p>
        </div>
        )
    }
}

Carrousel.propTypes={
    image:PropTypes.string,
    type:PropTypes.string,
}

export default Carrousel