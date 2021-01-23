import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import Button from "../../components/button/Button"
import ImageExport from "./../../components/media/imageExport"

import aboutStyles from "./about.module.scss";

const About = () => {
    return ( 
        <section id="about" className={aboutStyles.about}>
            <Container>
            <h1 style={{paddingTop:"2.5rem",textAlign:"center"}}>About Me</h1>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut unde a minima tenetur iste vero, necessitatibus corrupti 
                    deleniti eaque non exercitationem sed voluptatum commodi odit totam ullam nobis ducimus quos!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum dolor dolores? Assumenda, cupiditate quod! Tenetur inventore
                    saepe obcaecati velit eaque soluta placeat! Perspiciatis adipisci ratione, blanditiis quas consectetur sapiente!</p>
                    
                    <div className={aboutStyles.button}>
                        <Button padding="0.75rem 2rem" fontSize="20px" mainColor="#8DBE49">Resume</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                   <Box boxShadow={3}><Card style={{width:"100%", padding:"15px"}}>
                        <Grid container spacing={1}>
                            <Grid item> <ImageExport imgId="iconHTML" heigth="100px" width="100px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="iconCSS" heigth="100px" width="100px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="iconJS" heigth="100px" width="100px" borderRadius="50%" /></Grid>

                            <Grid item> <ImageExport imgId="iconSASS" heigth="100px" width="100px" borderRadius="50%" /></Grid>

                            <Grid item> <ImageExport imgId="iconReact" heigth="100px" width="100px" borderRadius="0%" /></Grid>
                            <Grid item> <ImageExport imgId="iconGatsby" heigth="100px" width="100px" borderRadius="0%" /></Grid>

                            <Grid item> <ImageExport imgId="iconR" heigth="100px" width="100px" borderRadius="50%" /></Grid>
                            <Grid item> <ImageExport imgId="iconPython" heigth="100px" width="100px" borderRadius="0%" /></Grid>
                        </Grid>
                    </Card></Box>
                </Grid>
            </Grid>
                
            </Container>
        </section>
     );
}
 
export default About;