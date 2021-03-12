import React, {useState} from 'react';
import { FormattedMessage } from "gatsby-plugin-intl"; //language

import projectsStyles from "./projects.module.scss";

import {Container, Grid, Card, CardActionArea, CardMedia,CardContent, Typography, NativeSelect, FormControl} from '@material-ui/core';
import images from "../../images"


const Projects = () => {
    const [projectSelected, setProjectSelected] = useState("Client Site");
    const {projectAppleClon, projectClientSiteOne, projectFitness, projectGameOfLife,projectPacman, projectPandemic, projectPortfolio,} = images[0];
    const projects = {
        "Apple Clon": {
            "name": "Apple Clon",
            "image": projectAppleClon,
            "tech": "HTML, CSS, SASS, JS",
            "url": "https://pablo-rueda.github.io/appleclone/",
            "git": "https://github.com/Pablo-Rueda/appleclone",
        },
        "Client Site": {
            "name": "Client Site",
            "image": projectClientSiteOne,
            "tech": "HTML, CSS, SASS, JS, React, Gatsby",
            "url": "https://www.sofiarodriguezpsicologia.com/",
            "git": "https://github.com/Pablo-Rueda/SofiaRodriguez",
        },
        "Fitness Plus": {
            "name": "Fitness Plus",
            "image": projectFitness,
            "tech": "HTML, CSS, SASS, JS, React",
            "url": "https://5f7f90bac946db00ea33da57--fitness-plus.netlify.app/",
            "git": "https://github.com/Pablo-Rueda/Fitness-plus",
        },
        "Game of Life": {
            "name": "Game of Life",
            "image": projectGameOfLife,
            "tech": "HTML, CSS, JS, React",
            "url": "https://conway-gameoflife.netlify.app/",
            "git": "https://github.com/Pablo-Rueda/CGL",
        },
        "Pacman": {
            "name": "Pacman",
            "image": projectPacman,
            "tech": "HTML, CSS, SASS, JS",
            "url": "https://pablo-rueda.github.io/pacman/",
            "git": "https://github.com/Pablo-Rueda/pacman",
        },
        "Corona Tracker": {
            "name": "Corona Tracker",
            "image": projectPandemic,
            "tech": "HTML, CSS, React",
            "url": "https://pandemic-track.netlify.app/",
            "git": "https://github.com/Pablo-Rueda/pandemic",
        },
        "Pablo Rueda Portfolio": {
            "name": "Pablo Rueda Portfolio",
            "image": projectPortfolio,
            "tech": "HTML, CSS, SASS, JS, React, Gatsby",
            "url": "https://pablorueda.com",
            "git": "https://github.com/Pablo-Rueda/PabloRuedaPortfolio",
        },
    }
    const Top = ["Client Site","Game of Life","Corona Tracker"];
    const projectsNames = [ "Client Site", "Game of Life", "Corona Tracker", "Pablo Rueda Portfolio", "Fitness Plus", "Pacman",  "Apple Clon"  ]

    return ( 
        <section id="projects" className={projectsStyles.section} style={{minHeight:"100vh"}}>
            <Container >
                <h1 style={{textAlign:"center"}}><FormattedMessage id="projects.title" /></h1>
                <Grid container spacing={1} justify="center">
                {Top.map(project => {
                    return (
                    <Grid item xs={12} md={4}  component={Card} className={projectsStyles.card} key={projects[project].name}>
                        <CardActionArea>
                            <CardMedia 
                                image={projects[project].image} 
                                className={projectsStyles.image}
                                />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" className={projectsStyles.tittle}> {projects[project].name} </Typography>
                            <Typography variant="subtitle1" className={projectsStyles.tech}> {projects[project].tech} </Typography>
                        </CardContent>
                    </Grid>
                    )
                })}
                </Grid>
                <div className={projectsStyles.formContainer}>
                <Typography variant="h5" className={projectsStyles.tittle}> All my projects </Typography>
                    <Card className={projectsStyles.card}>
                        <CardActionArea>
                            <CardMedia 
                                image={projects[projectSelected].image} 
                                className={projectsStyles.image}
                                />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" className={projectsStyles.tittle}> {projects[projectSelected].name} </Typography>
                            <Typography variant="subtitle1" className={projectsStyles.tech}> {projects[projectSelected].tech} </Typography>
                        </CardContent>
                    </Card>
                    <FormControl>
                        <NativeSelect defaultValue="Client Site" onChange={(e)=>{setProjectSelected(e.target.value)}}>
                            {projectsNames.map(project =>{
                                    return(<option value={projects[project].name} key={projects[project].name}>{projects[project].name} </option>)
                            })}
                        </NativeSelect>
                    </FormControl>
                </div>
            </Container>
        </section>
     );
}
 
export default Projects;