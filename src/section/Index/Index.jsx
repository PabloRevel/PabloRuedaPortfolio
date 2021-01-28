import React, { useContext } from 'react';

// components
import VideoBackground from "../../components/media/videoBackground";
import indexStyles from "./Index.module.scss";
import ImageExport from "./../../components/media/imageExport";
import Button from "../../components/button/Button";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

// context
import PortfolioContext from '../../context/context';

const Index = () => {
    const { hero } = useContext(PortfolioContext);
    const { name, subtitle } = hero;
  
    return ( 
        <section id="main">
            <VideoBackground> 
                <div className={indexStyles.content}>
                    <Fade top duration={1000} delay={500} distance="30px">
                        <ImageExport 
                            heigth="250px" 
                            width="250px" 
                            borderRadius="50%" 
                            boxShadow="0px 0px 15px #18ffff"
                            imgId={"profile" }
                        />
                    </Fade>
    
                    <h1>{name}</h1>
                    <h3>{subtitle}</h3>
                    <div className={indexStyles.buttons}>
                    <Link to="about" smooth duration={1000}>
                        <Button mainColor="#8DBE49">Conóceme</Button>
                    </Link>       
                    </div>
                </div>
            </VideoBackground>
            <div style={{height:"100vh"}}></div>
        </section>
     );
}
 
export default Index;