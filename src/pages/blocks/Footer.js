import '../static/style/footer.css';
import logo2 from '../static/img/logo2.svg';

function Footer() {
    return(
        <div className="Footer">
            <footer className="footer">
                <div className="container">
                    <div className="flex_things">
                        <div className="logo">
                            <img src={logo2} alt=""/>
                        </div>
                        <ul className="listLinks">
                            <li><a href="">Home</a></li>
                            <li><a href="">Galary</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Somethimg</a></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Contacts</a></li>
                            <li><a href="">Credits</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer;