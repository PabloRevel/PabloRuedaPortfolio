import React from 'react';
import { FormattedMessage,useIntl } from "gatsby-plugin-intl"; //language

import ResumeEn from "./PabloRuedaResumeEn.pdf"
import ResumeEs from "./PabloRuedaResumeEs.pdf"
//components
import Button from "./../../components/button/Button"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Rotate from 'react-reveal/Rotate';
import ImageExport from "./../../components/media/imageExport"
import aboutStyles from "./about.module.scss";

const About = () => {
    const intl = useIntl()

    return ( 
        <section id="about" className={aboutStyles.about}>
            <Container>
            <h1 style={{paddingTop:"3rem",textAlign:"center"}}> <FormattedMessage id="about.title" /> </h1>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <p> <FormattedMessage id="about.pharagraphOne" /> </p>
                    <p> <FormattedMessage id="about.pharagraphTwo" /> </p>                    
                    <p> <FormattedMessage id="about.pharagraphThree" /> </p>                    
                    <div className={aboutStyles.button}>
                    <a href={ (intl.formatMessage({ id: "about.resume" })==="ResumeEn") ? ResumeEn : ResumeEs }
                        rel="noreferrer" 
                        target="_blank">
                        <Button padding="0.75rem 2rem" fontSize="20px" mainColor="#8DBE49"><FormattedMessage id="about.button" /></Button>
                    </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Rotate bottom right duration={1250} delay={500} >

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