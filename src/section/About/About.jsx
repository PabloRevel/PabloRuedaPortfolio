import React from 'react';
import { FormattedMessage,useIntl } from "gatsby-plugin-intl"; //language

import ResumeEn from "./PabloRuedaResumeEn.pdf"
import ResumeEs from "./PabloRuedaResumeEs.pdf"
//components
import {ImportImages, Btn} from "./../../components";

import {Container, Grid, Card } from '@material-ui/core';
import {Line} from "react-chartjs-2";

import Fade from 'react-reveal/Fade';

import aboutStyles from "./about.module.scss";

const About = () => {
    const intl = useIntl()

    return ( 
        <section id="about" className={aboutStyles.about}>
            <Container style={{paddingTop:"4rem"}}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3}><Fade bottom duration={1000} delay={500} distance="30px">
                <div style={{display:"flex", justifyContent:"center"}}>
                <ImportImages 
                                heigth="250px" 
                                width="250px" 
                                borderRadius="50%" 
                                boxShadow="0px 0px 15px #18ffff"
                                imgId={"profile" }
                /></div>
                <div style={{display:"flex", justifyContent:"center", padding:15}}>
                    <a href={ (intl.formatMessage({ id: "about.resume" })==="ResumeEn") ? ResumeEn : ResumeEs }
                            rel="noreferrer" 
                            target="_blank">
                            <Btn padding="0.75rem 2rem" fontSize="20px" mainColor="#8DBE49"><FormattedMessage id="about.button" /></Btn>
                    </a>                
                </div>
                </Fade></Grid>
                <Grid item xs={12} sm={9} className={aboutStyles.rightDiv}>
                    <Fade right duration={1000} delay={500} distance="50px"><h1 style={{color:"#074b45"}}> <FormattedMessage id="about.title" /></h1></Fade>
                    <Fade right duration={1250} delay={1000} distance="75px"><p>
                        <FormattedMessage id="about.text" />
                    </p></Fade>
                    <Card className={aboutStyles.card}>
                        <div style={{maxWidth:"720px", margin:"0 auto"}}> 
                            <h4 style={{padding:"10px 0 0",margin:"0"}}><FormattedMessage id="about.chart" /></h4>
                            <div style={{padding:"10px 20px", width:"100%"}}><Line 
                                data={{
                                    labels: ["2017","2018","2019", "2020","2021","2022"],
                                    datasets: [
                                        {
                                            data: [100, 90,60,10,0,0],
                                            label:"R",
                                            borderColor:"#2d4fcc",
                                            fill: false
                                        },
                                        {
                                            data: [0, 10,20,30,40,30],
                                            label:"Python",
                                            borderColor:"#c73f36",
                                            fill: false
                                        },
                                        {
                                            data: [0, 0,20,50,10,0],
                                            label:"JavaScript",
                                            borderColor:"#ebe534",
                                            fill: false
                                        },
                                        {
                                            data: [0, 0,0,10,50,70],
                                            label:"SQL",
                                            borderColor:"#BB62DC",
                                            fill: false
                                        }]
                                }}
                            /> </div>
                        </div>
                    </Card>
                     
                </Grid>
            </Grid>
                
            </Container>
        </section>
     );
}
 
export default About;