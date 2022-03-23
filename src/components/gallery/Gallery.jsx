import '../gallery/Gallery.scss'
import PropTypes from 'prop-types';
import Thumb from '../thumb/Thumb';

const Gallery = (props) => {
    return (
        <section className="gallery">
            {props.data.map((data)=>(
                <Thumb cover={data.cover} name={data.title} key={data.id} />
            ))}
        </section>
    )
}

Gallery.propTypes={
    data:PropTypes.array
}

export default Gallery