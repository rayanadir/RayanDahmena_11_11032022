import '../House/House.scss';
import React from 'react';
import Carrousel from '../../components/carrousel/Carrousel'
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Dropdown from '../../components/dropdown/Dropdown';

const House= (props) => {
    return(
        <main>
            <Carrousel  image={props.data.pictures[0]} key={props.data.pictures[0]} pictures={props.data.pictures} />
            <section className='infos'>
                <div className="infos__title_localisation_tags">
                    <div className="infos__title_localisation">
                        <h2 className="infos__title">{props.data.title}</h2>
                        <h5 className="infos__localisation">{props.data.location}</h5>
                    </div>
                    <div className="infos__tags">
                        {props.data.tags.map((tag)=>( <Tag name={tag} key={tag} /> ))}
                    </div>
                </div>
                <div className="infos__host_rate">
                    <div className="infos__host">
                        <p className="infos__hostName">{props.data.host.name}</p>
                        <img className='infos__hostPicture' src={props.data.host.picture} alt={props.data.host.name}/>
                    </div>
                    <div className="infos__rate" id='rating'>
                        <Rating rate={props.data.rating} />
                    </div>
                </div>
            </section>
            <section className='dropdowns'>
                <Dropdown type='equipements_description' name='Description' content={props.data.description} />
                <Dropdown type='equipements_description' name='Equipements' content={props.data.equipments}/>
            </section>
        </main>
    )
}

export default House