import '../dropdown/dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export class Dropdown extends React.Component{
     Dropdown = () =>{
        return (
            <div className="dropdown">
                <p className="name">Équipements</p>
                <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </div>
        )
    }

     DropdownOpen = () =>{
        return (
            <div>
                <div className="dropdown">
                    <p className="name">Équipements</p>
                    <FontAwesomeIcon icon={faChevronDown} className="icon open" />
                </div>
                <div className='dropdownList'>
                    {this.props.list.map((element)=>{
                        return <li className='elementName' key={element}>{element}</li>
                    })}
                </div>
            </div>
            
        )
    }

    render(){
        return(
            <div>
                {this.Dropdown()}
                {this.DropdownOpen()}
            </div>
            )
    }
}
