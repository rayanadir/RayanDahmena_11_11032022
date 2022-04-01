import '../House/House.scss';
import React from 'react';
import Carrousel from '../../components/carrousel/Carrousel'
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';
import Dropdown from '../../components/dropdown/Dropdown';
import { useParams } from 'react-router-dom'
import { data } from '../../data/logements';

/**
 * 
 * @returns page d'appartement
 */
const House= () => {
    window.scrollTo(0,0)
    let {id} = useParams();
    const house=data.filter(house=>house.id===id)
    return(
        <main>
            <Carrousel image={house[0].pictures[0]} key={house[0].pictures[0]} pictures={house[0].pictures} />
            <section className='infos'>
                <div className="infos__title_localisation_tags">
                    <div className="infos__title_localisation">
                        <h2 className="infos__title">{house[0].title}</h2>
                        <h5 className="infos__localisation">{house[0].location}</h5>
                    </div>
                    <div className="infos__tags">
                        {house[0].tags.map((tag)=>( <Tag name={tag} key={tag} /> ))}
                    </div>
                </div>
                <div className="infos__host_rate">
                    <div className="infos__host">
                        <p className="infos__hostName">{house[0].host.name}</p>
                        <img className='infos__hostPicture' src={house[0].host.picture} alt={house[0].host.name}/>
                    </div>
                    <div className="infos__rate" id='rating'>
                        <Rating rate={house[0].rating} />
                    </div>
                </div>
            </section>
            <section className='dropdowns'>
                <Dropdown type='equipements_description' name='Description' content={house[0].description} />
                <Dropdown type='equipements_description' name='Equipements' content={house[0].equipments}/>
            </section>
        </main>
    )
}

export default House