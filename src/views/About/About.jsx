import '../Home/Home.scss'
import React from 'react';
import AboutDropdowns from '../../components/aboutDropdowns/AboutDropdowns';
import background from '../../assets/background_about.png'
import Banner from '../../components/banner/Banner';


const About = () => {
    
    return (
        <main>
            <Banner image={background} type="about" />
            <AboutDropdowns />
        </main>
    )
}

export default About