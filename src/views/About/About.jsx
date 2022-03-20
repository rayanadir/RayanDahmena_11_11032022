import '../Home/Home.scss'
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import AboutDropdowns from '../../components/aboutDropdowns/AboutDropdowns';
import Carrousel from '../../components/carrousel/Carrousel';
import background from '../../assets/background_about.png'


const About = () => {
    
    return (
        <div>
            <Header />
            <Carrousel image={background} type="about" />
            <AboutDropdowns />
            <Footer />
        </div>
    )
}

export default About