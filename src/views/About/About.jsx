import '../Home/Home.scss'
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import AboutDropdowns from '../../components/aboutDropdowns/AboutDropdowns';
import background from '../../assets/background_about.png'
import Banner from '../../components/banner/Banner';


const About = () => {
    
    return (
        <div>
            <Header />
            <Banner image={background} />
            <AboutDropdowns />
            <Footer />
        </div>
    )
}

export default About