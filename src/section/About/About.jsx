import React, { useContext } from 'react';

import Resume from './PabloRuedaResume.pdf';

//components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rotate from 'react-reveal/Rotate';
import Button from "../../components/button/Button"
import ImageExport from "./../../components/media/imageExport"
import aboutStyles from "./about.module.scss";


//content:
import PortfolioContext from '../../context/context';


const About = () => {
    const { about } = useContext(PortfolioContext);
    const { paragraphOne, paragraphTwo, sectionTitle } = about;
    return ( 
        <section id="about" className={aboutStyles.about}>
            <Container>
            <h1 style={{paddingTop:"3rem",textAlign:"center"}}>{sectionTitle} </h1>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <p> {paragraphOne} </p>
                    <p> {paragraphTwo} </p>                    
                    <div className={aboutStyles.button}>
                        <a href={Resume} rel="noreferrer" target="_blank">
                            <Button padding="0.75rem 2rem" fontSize="20px" mainColor="#8DBE49">Descargar CV</Button>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Rotate bottom right duration={2000} delay={1000} >

                   <Box boxShadow={3}><Card style={{width:"100%", padding:"15px"}}>
                        <Grid container spacing={1} alignItems="center" >
                            <Grid item> <ImageExport imgId="iconHTML" heigth="75px" width="75px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="iconCSS" heigth="75px" width="75px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="iconJS" heigth="75px" width="75px" borderRadius="50%" /></Grid>

                            <Grid item> <ImageExport imgId="iconSASS" heigth="75px" width="75px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="materializeLogo" heigth="75px" width="75px" borderRadius="0%" /></Grid>

                            <Grid item> <ImageExport imgId="iconReact" heigth="75px" width="75px" borderRadius="0%" /></Grid>
                            <Grid item> <ImageExport imgId="iconGatsby" heigth="75px" width="75px" borderRadius="0%" /></Grid>
                            <Grid item> <ImageExport imgId="materialUiLogo" heigth="75px" width="75px" borderRadius="0%" /></Grid>

                            <Grid item> <ImageExport imgId="iconR" heigth="75px" width="75px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="iconPython" heigth="75px" width="75px" borderRadius="0%" /></Grid>

                            <Grid item> <ImageExport imgId="gitLogo" heigth="75px" width="75px" borderRadius="0%" /></Grid>
                        </Grid>
                    </Card></Box>
                    </Rotate>
                </Grid>
            </Grid>
                
            </Container>
        </section>
     );
}
 
export default About;