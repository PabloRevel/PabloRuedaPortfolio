import React, {useState} from 'react';

import { FormattedMessage,useIntl } from "gatsby-plugin-intl"; //language

import projectsStyles from "./projects.module.scss";

import { ProjectTab } from "./../../components"
import Flip from 'react-reveal/Flip';
import {Container, Grid, Card, CardActionArea, CardMedia,CardContent, Typography, NativeSelect, FormControl} from '@material-ui/core';

import images from "../../images"


const Projects = () => {
    const [projectSelected, setProjectSelected] = useState("Pablo Rueda Portfolio");
    const [display, setDisplay] = useState({display:"none"});
    const [projectDisplay, setProjectDisplay] = useState("Pablo Rueda Portfolio");


    const intl = useIntl();
    const handleDisplayChange = (project,visibility) => {
        setDisplay(visibility);
        setProjectDisplay(project);
      }

    const { projectAppleClon, projectClientSiteOne, projectFitness, projectGameOfLife,projectPacman,
            projectPandemic, projectPortfolio,projectClientGif, projectGameOfLifetGif,projectpPandemictGif} = images[0];
    const projects = {
        "Apple Clon": {
            "name": "projects.appleclon.tittle",
            "image": projectAppleClon,
            "tech": "HTML, CSS, SASS, JS",
            "url": "https://pablo-rueda.github.io/appleclone/",
            "git": "https://github.com/Pablo-Rueda/appleclone",
            "description": "projects.appleclon.description"
        },
        "Client Site": {
            "name": "projects.clientsite.tittle",
            "image": projectClientSiteOne,
            "gif": projectClientGif,
            "tech": "HTML, CSS, SASS, JS, React, Gatsby",
            "url": "https://www.sofiarodriguezpsicologia.com/",
            "git": "https://github.com/Pablo-Rueda/SofiaRodriguez",
            "description": "projects.clientsite.description"
        },
        "Fitness Plus": {
            "name": "projects.fitness.tittle",
            "image": projectFitness,
            "tech": "HTML, CSS, SASS, JS, React",
            "url": "https://5f7f90bac946db00ea33da57--fitness-plus.netlify.app/",
            "git": "https://github.com/Pablo-Rueda/Fitness-plus",
            "description": "projects.fitness.description"
        },
        "Game of Life": {
            "name": "projects.gameoflife.tittle",
            "image": projectGameOfLife,
            "gif": projectGameOfLifetGif,
            "tech": "HTML, CSS, JS, React",
            "url": "https://conway-gameoflife.netlify.app/",
            "git": "https://github.com/Pablo-Rueda/CGL",
            "description": "projects.gameoflife.description"
        },
        "Pacman": {
            "name": "projects.pacman.tittle",
            "image": projectPacman,
            "tech": "HTML, CSS, SASS, JS",
            "url": "https://pablo-rueda.github.io/pacman/",
            "git": "https://github.com/Pablo-Rueda/pacman",
            "description": "projects.pacman.description"
        },
        "Corona Tracker": {
            "name": "projects.corona.tittle",
            "image": projectPandemic,
            "gif": projectpPandemictGif,
            "tech": "HTML, CSS, React",
            "url": "https://pandemic-track.netlify.app/",
            "git": "https://github.com/Pablo-Rueda/pandemic",
            "description": "projects.corona.description"
        },
        "Pablo Rueda Portfolio": {
            "name": "projects.portfolio.tittle",
            "image": projectPortfolio,
            "tech": "HTML, CSS, SASS, JS, React, Gatsby",
            "url": "https://pablorueda.com",
            "git": "https://github.com/Pablo-Rueda/PabloRuedaPortfolio",
            "description": "projects.portfolio.description"
        },
    }
    const Top = ["Client Site","Game of Life","Corona Tracker"];
    const projectsNames = [ "Client Site", "Game of Life", "Corona Tracker", "Pablo Rueda Portfolio", "Fitness Plus", "Pacman",  "Apple Clon"]

    return ( 
        <section id="projects" className={projectsStyles.section} style={{minHeight:"100vh"}}>
            <Container >
                <h1 style={{textAlign:"center"}}><FormattedMessage id="projects.title" /></h1>
                <Grid container spacing={1} justify="center">
                {Top.map(project => {
                    return (
                    <Flip left duration={1000} delay={500}>
                        <Grid item xs={12} md={4}  component={Card} className={projectsStyles.card} key={projects[project].name}>
                            <CardActionArea onClick={()=>{handleDisplayChange(project,{display:"block"})}}>
                                <CardMedia 
                                    image={projects[project].image} 
                                    className={projectsStyles.image}
                                    />
                            </CardActionArea>
                            <CardContent>
                                <Typography variant="h5" className={projectsStyles.tittle}>  <FormattedMessage id={projects[project].name}  /> </Typography>
                                <Typography variant="subtitle1" className={projectsStyles.tech}>  {projects[project].tech} </Typography>
                            </CardContent>
                        </Grid>
                    </Flip>
                    )
                })}
                </Grid>
                <div className={projectsStyles.formContainer}>
                    <Typography variant="h5" className={projectsStyles.tittle}> <FormattedMessage id="projects.subsection" /> </Typography>
                    <FormControl>
                        <NativeSelect defaultValue="Pablo Rueda Portfolio" onChange={(e)=>{setProjectSelected(e.target.value)}}>
                            {projectsNames.map(project =>{
                                    return(<option value={project} key={projects[project].name}>
                                        { intl.formatMessage({ id: projects[project].name })}
                                     </option>)
                            })}
                        </NativeSelect>
                    </FormControl>
                    <Card className={projectsStyles.card}>
                   
                        <CardActionArea onClick={()=>{handleDisplayChange(projectSelected,{display:"block"})}}>
                            <CardMedia 
                               image={projects[projectSelected].image} 
                                className={projectsStyles.image}
                                />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" className={projectsStyles.tittle}>  <FormattedMessage id={projects[projectSelected].name} /> </Typography>
                            <Typography variant="subtitle1" className={projectsStyles.tech}> {projects[projectSelected].tech} </Typography>
                        </CardContent>
                    
                    </Card>
                </div>
            <ProjectTab project={projects[projectDisplay]} display={display} handleDisplayChange={handleDisplayChange} />
            </Container>
        </section>
     );
}
 
export default Projects;