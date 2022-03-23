import '../aboutDropdowns/AboutDropdowns.scss'
import { about } from '../../data/aboutData';
import Dropdown from '../../components/dropdown/Dropdown';

const AboutDropdowns = () => {
    return (
        <section className='aboutDropdowns'>
            {about.map((about)=>(
                <Dropdown name={about.name} content={about.content} type="about" key={about.name}/>
            ))}
        </section>
    )
}

export default AboutDropdowns