import React from 'react';
import { FormattedMessage } from "gatsby-plugin-intl"; //language

// components
import {Video, Button} from "../../components"
import mainStyles from "./Main.module.scss";
import { Link } from 'react-scroll';

const Main = () => {
    return ( 
        <section id="main">
            <Video> 
                <div className={mainStyles.content}>
                {/* 
                    <Fade top duration={1000} delay={500} distance="30px">
                        <ImageExport 
                            heigth="250px" 
                            width="250px" 
                            borderRadius="50%" 
                            boxShadow="0px 0px 15px #18ffff"
                            imgId={"profile" }
                        />
                    </Fade>
                */}
                    <h1><FormattedMessage id="meta.author" /></h1>
                    <h3><FormattedMessage id="hero.tittle" /></h3>
                    <div className={mainStyles.buttons}>
                    <Link to="about" smooth duration={1000}>
                        <Button mainColor="#8DBE49"><FormattedMessage id="hero.button" /></Button>
                    </Link>       
                    </div>
                </div>
            </Video>
            <div style={{height:"100vh"}}></div>
        </section>
     );
}
 
export default Main;