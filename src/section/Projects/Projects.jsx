import React from 'react';
import { FormattedMessage } from "gatsby-plugin-intl"; //language

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from "../../components/Card/Card"

const Projects = () => {
    return ( 
        <section id="projects" style={{minHeight:"100vh"}}>
            <Container>
                <h1 style={{textAlign:"center", color:"#074b45", paddingTop:"3rem"}}><FormattedMessage id="projects.title" /></h1>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectOne"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS, React, Gatsby"} title={"Freelance website"} 
                        gitLink={"https://github.com/Pablo-Rueda/SofiaRodriguez"} tryLink={"https://sofiarodriguezpsicologa.netlify.app/"}> 
                            <p> <FormattedMessage id="projects.projectOne.phOne" /> </p>
                            <p> <FormattedMessage id="projects.projectOne.phTwo" /> </p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectTwo"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS"} title={"Apple web clon"}
                        gitLink={"https://github.com/Pablo-Rueda/appleclone"} tryLink={"https://pablo-rueda.github.io/appleclone/"}> 
                            <p> <FormattedMessage id="projects.projectTwo.phOne" /> </p>
                            <p> <FormattedMessage id="projects.projectTwo.phTwo" /> </p>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectFive"} color={"#06DDDD"} tech={"HTML, CSS, JS, React"} title={"Game of Life"}
                        gitLink={"https://github.com/Pablo-Rueda/CGL"} tryLink={"https://conway-gameoflife.netlify.app/"}> 
                            <p> <FormattedMessage id="projects.projectFive.phOne" 
                            defaultMessage="Personal version of Conyway's Game of Life. After creating an small Pacman project, I realised that small mini-games are a good way of testing and increasing my skills."  /> </p>

                            <p> <FormattedMessage id="projects.projectFive.phTwo" 
                            defaultMessage="In this project, I wanted to test my skills with React context and hooks for state management, while creating meaningfull components (board-cells, header and the instructions)." /> </p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectFour"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS"} title={"Pacman"}
                        gitLink={"https://github.com/Pablo-Rueda/pacman"} tryLink={"https://pablo-rueda.github.io/pacman/"}> 
                            <p> <FormattedMessage id="projects.projectFour.phOne" /> </p>
                            <p> <FormattedMessage id="projects.projectFour.phTwo" /> </p>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectThree"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS, React"} title={"Fitness React App"}
                        gitLink={"https://github.com/Pablo-Rueda/Fitness-plus"} tryLink={"https://5f7f90bac946db00ea33da57--fitness-plus.netlify.app/"}> 
                            <p> <FormattedMessage id="projects.projectThree.phOne" /> </p>
                            <p> <FormattedMessage id="projects.projectThree.phTwo" /> </p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                </Grid>
            </Container>
        </section>
     );
}
 
export default Projects;