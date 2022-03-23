import '../Home/Home.scss';
import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import background from '../../assets/background_home.png';
import Gallery from '../../components/gallery/Gallery';
import PropTypes from 'prop-types';

const Home = (props) => {
    return(
        <div>
            <Header />
            <Banner image={background} type="home" />
            <Gallery data={props.data} />
            <Footer />
        </div>    
    )
}

Home.propTypes={
    image:PropTypes.string,
    data:PropTypes.array,
}

export default Home