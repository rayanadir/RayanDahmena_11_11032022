import '../gallery/Gallery.scss'
import PropTypes from 'prop-types';
import Thumb from '../thumb/Thumb';
import { Link } from 'react-router-dom';

const Gallery = (props) => {
    return (
        <section className="gallery">
            {props.data.map((data)=>(
                <Link to={`/house/${data.id}`} key={data.id}>
                    <Thumb cover={data.cover} name={data.title} key={data.id} />
                </Link>
            ))}
        </section>
    )
}

Gallery.propTypes={
    data:PropTypes.array
}

export default Gallery