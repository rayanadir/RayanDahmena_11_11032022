import '../banner/Banner.scss';
import PropTypes from 'prop-types';

const Banner = (props) => {
    return (<img src={props.image} className="banner"  alt="about" />)
}

Banner.propTypes={
    image: PropTypes.string
}

export default Banner