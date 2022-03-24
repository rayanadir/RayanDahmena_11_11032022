import '../Home/Home.scss';
import React from 'react';
import Banner from '../../components/banner/Banner';
import background from '../../assets/background_home.png';
import Gallery from '../../components/gallery/Gallery';
import PropTypes from 'prop-types';

const Home = (props) => {
    return(
        <main>
            <Banner image={background} type="home" />
            <Gallery data={props.data} />
        </main>
    )
}

Home.propTypes={
    image:PropTypes.string,
    data:PropTypes.array,
}

export default Home