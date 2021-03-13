import React from 'react';
import {ImportImages} from "./../../components"
import {Container,Card, CardContent, Typography, Grid} from '@material-ui/core';
import skillsStyles from "./Skills.module.scss";
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return ( 
        <section id="skills">
            <Container>
                <h1 style={{textAlign:"center", color:"#074b45", paddingTop:"4rem"}}>SKILLS</h1>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={3} >
                        <Fade top duration={1000} delay={500} distance="50px"><Card className={skillsStyles.card}>
                            <CardContent>
                                <Typography align="center" color="textSecondary" variant="h5"> Top Tech*</Typography> 

                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconSASS"} />
                                    <Typography  gutterBottom> CSS / SASS</Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconJS"} />
                                    <Typography  gutterBottom> JavaScript</Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconReact"} />
                                    <Typography  gutterBottom> React JS</Typography>
                                </div>
                            </CardContent>
                        </Card></Fade>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Fade top duration={1000} delay={1000} distance="50px"><Card className={skillsStyles.card}>
                            <CardContent>
                                <Typography align="center" color="textSecondary" variant="h5"> Knowledge</Typography> 
                                
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconData"} />
                                    <Typography  gutterBottom> APIs management</Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconDice"} />
                                    <Typography  gutterBottom> Statistics</Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconMobile"} />
                                    <Typography  gutterBottom> Responsive design</Typography>
                                </div>
                            </CardContent>
                        </Card></Fade>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Fade top duration={1000} delay={1500} distance="50px"><Card className={skillsStyles.card}>
                            <CardContent>
                            <Typography align="center" color="textSecondary" variant="h5"> Soft Skills</Typography> 
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconHand"} />
                                    <Typography  gutterBottom> Motivation</Typography>
                                </div>

                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconPeople"} />
                                    <Typography  gutterBottom> Team Work</Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconTwoArrows"} />
                                    <Typography  gutterBottom> Flexibility</Typography>
                                </div>
                            </CardContent>
                        </Card></Fade>
                    </Grid>
                </Grid>
                <div className={skillsStyles.backgroundImage}> 
                    <div className={skillsStyles.otherTech} >
                            <Typography  variant="h5"> *Other tech:</Typography>
                            <Typography  > Front end: HTML, CSS, SASS, Materialize, Javascript, React, Gatsby</Typography>
                            <Typography  > Back end: node.js, mongoDB, MySQL</Typography>
                            <Typography  > Data: R, Python</Typography>
                    </div>
                </div>
            </Container>
        </section>
     );
}
 
export default Skills;
