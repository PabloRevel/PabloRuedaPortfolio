import React from 'react';
import {ImportImages} from "./../../components"
import {Container,Card, CardContent, Typography, Grid} from '@material-ui/core';
import skillsStyles from "./Skills.module.scss";
import { FormattedMessage } from "gatsby-plugin-intl"; //language
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return ( 
        <section id="skills">
            <Container>
                <h1 style={{textAlign:"center", color:"#074b45", paddingTop:"4rem"}}><FormattedMessage id="skills.title" /></h1>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={3} >
                        <Fade top duration={1000} delay={500} distance="50px"><Card className={skillsStyles.card}>
                            <CardContent>
                                <Typography align="center" color="textSecondary" variant="h5"> <FormattedMessage id="skills.toptech.tittle" /> </Typography> 

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
                                <Typography align="center" color="textSecondary" variant="h5"> <FormattedMessage id="skills.knowledge.tittle" /></Typography> 
                                
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconData"} />
                                    <Typography  gutterBottom> <FormattedMessage id="skills.knowledge.apis" /> </Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconDice"} />
                                    <Typography  gutterBottom> <FormattedMessage id="skills.knowledge.statistics" /> </Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconMobile"} />
                                    <Typography  gutterBottom> <FormattedMessage id="skills.knowledge.responsive" /></Typography>
                                </div>
                            </CardContent>
                        </Card></Fade>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Fade top duration={1000} delay={1500} distance="50px"><Card className={skillsStyles.card}>
                            <CardContent>
                            <Typography align="center" color="textSecondary" variant="h5"> <FormattedMessage id="skills.soft.tittle" /></Typography> 
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconHand"} />
                                    <Typography  gutterBottom> <FormattedMessage id="skills.soft.motivation" /> </Typography>
                                </div>

                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconPeople"} />
                                    <Typography  gutterBottom> <FormattedMessage id="skills.soft.team" /></Typography>
                                </div>
                                <div className={skillsStyles.textIcons}> 
                                    <ImportImages height="50px" imgId={"iconTwoArrows"} />
                                    <Typography  gutterBottom> <FormattedMessage id="skills.soft.flexible" /></Typography>
                                </div>
                            </CardContent>
                        </Card></Fade>
                    </Grid>
                </Grid>
                <div className={skillsStyles.backgroundImage}> 
                    <div className={skillsStyles.otherTech} >
                            <Typography  variant="h5"> <FormattedMessage id="skills.subsection" /></Typography>
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
