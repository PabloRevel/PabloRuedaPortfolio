import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from "./../../components/card/card"

const Projects = () => {
    return ( 
        <section id="projects" style={{minHeight:"100vh"}}>
            <Container>
                <h1 style={{textAlign:"center", color:"#074b45", paddingTop:"3rem"}}>PROJECTS</h1>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"profile"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS, React, Gatsby"} title={"Psychologist web site"} 
                        gitLink={"https://github.com/Pablo-Rueda/SofiaRodriguez"} tryLink={"https://sofiarodriguezpsicologa.netlify.app/"}> 
                            <p>Recent website job for a Psychologist. I fully designed the web, created the logo and wrote the code from scratch.</p>
                            <p> I used Gatsby / React framework, and Material Ui for the base of some of the styling components 
                                (e.g. Containers, Grids, Cards, etc.). The CSS writting was done with SASS.</p>
                            <p> The email contact form was developed using emailJS and formkit, avoiding extra backend.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"profile"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS"} title={"Apple website clone"}
                        gitLink={"https://github.com/Pablo-Rueda/appleclone"} tryLink={"https://pablo-rueda.github.io/appleclone/"}> 
                            <p>Practise Apple site (Uk November 2020) clone. I consider it as a great practise for responsive design 
                            with HTML5, CSS and SASS.</p>
                            <p> I wrote some custom JavaScript for the specific functionalities of the site: 
                            the blurry content behind the navbar, and the shopping bag button. </p>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"profile"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS, React, Gatsby"} title={"Fitness React App"}
                        gitLink={"https://github.com/Pablo-Rueda/Fitness-plus"} tryLink={"https://5f7f90bac946db00ea33da57--fitness-plus.netlify.app/"}> 
                        <p>Fitness React web-app.</p>
                        <p> App created using React state and hooks, and SASS to compile the CSS.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"profile"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS"} title={"Pacman"}
                        gitLink={"https://github.com/Pablo-Rueda/pacman"} tryLink={"https://pablo-rueda.github.io/pacman/"}> 
                            <p> This project demostrate a range of skills: DOM manipulation, JavaScript functions and object oriented programmin skills.</p> 
                            <p> The board was created as a numbers array, based 
                            on the numbers array each individual cell was introduced.</p>
                            <p> The pacman creature and the ghosts were created as different objetcs with a common parental object (Creature) from which they inherited
                            their common properties.</p>
                        </Card>
                    </Grid>
                </Grid>
                
            </Container>
        </section>
     );
}
 
export default Projects;