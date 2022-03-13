import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../about/about.css'

export class About extends React.Component{
    about = (data) => {
        return(
            <div className='dropdownAbout'>
                <p className='name'>{data.name}</p>
                <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </div>
        )
    }

    aboutOpen = (data) => {
        return (
            <div className='about'>
                <div className='dropdownAbout'>
                    <p className='name'>{data.name}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="icon open" />
                </div>
                <div className='dropdownContent'>
                    <p className='dropdownContentText'>{data.content}</p> 
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.about(this.props)}
                {this.aboutOpen(this.props)}
            </div>
        )
    }
}