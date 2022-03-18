import './Footer.scss';
import image from '../../assets/logo_footer.png'

const Footer = () => {
    const year= new Date().getFullYear();
    console.log(image);
    return(
        <div className="footer">
            <img src={image} alt="footer_logo" className="footer__logo" />
            <p className='footer__copyrights'>© {year} Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer