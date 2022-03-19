import '../dropdown/Dropdown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import dropdownView from './ToggleDropdown'
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    const [isOpen, toggle]=useState("closed")
    
    const toggleDropdown = (e) => {
        e.preventDefault();
        const value  = (isOpen)=>{return isOpen==="closed" ? "open" : "closed"}
        toggle(value(isOpen));
        dropdownView(props,isOpen)
    }

    return (
        <div>
            <div className={`dropdown ${props.type}`} onClick={(e)=>toggleDropdown(e)}>
                <p className="dropdown__name">{props.name}</p>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown__icon dropdown__open" id={'chevron_'+ props.name} />
            </div>
            <div id={props.name} className={`dropdown__list ${props.type} open`}>
                {
                    Array.isArray(props.content) ? props.content.map((element) => {
                        return <li className="dropdown__elementName" key={element}>{element}</li>
                    }) : <p className="dropdown__content">{props.content}</p>
                }
            </div>
        </div>
    )
}

Dropdown.propTypes={
    type:PropTypes.string,
    name:PropTypes.string,
    content:PropTypes.string,
    element:PropTypes.array.isRequired,
}

export default Dropdown