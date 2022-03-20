import '../aboutDropdowns/AboutDropdowns.scss'
import { about } from '../../data/aboutData';
import Dropdown from '../../components/dropdown/Dropdown';

const AboutDropdowns = () => {
    return (
        <section className='aboutDropdowns'>
            <Dropdown name={about[0].name} content={about[0].content} type="about" />
            <Dropdown name={about[1].name} content={about[1].content} type="about" />
            <Dropdown name={about[2].name} content={about[2].content} type="about" />
            <Dropdown name={about[3].name} content={about[3].content} type="about" />
        </section>
    )
}

export default AboutDropdowns