



import Footer from './blocks/Footer.js';


import './static/style/home.css';

import image from './static/img/body.png';


const Home = () => {
    return(
        <div className="Home">
            <div className="container">
                <div className="aboytUs">
                <div className="main">
                    <div className="text">
                        <h1>About Us</h1>
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur cupiditate delectus dolorem, eos et id in inventore ipsa magni nisi quos repudiandae saepe sint suscipit tenetur, totam! Nesciunt, nobis?</span></p>
                    </div>
                    <div className="button">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D">Start</a>
                    </div>
                </div>
                    <div className="image">
                        <img src={image} alt="" width={300} height={500}  />
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
        
        
        
        
        
    );
  };
  
  export default Home;