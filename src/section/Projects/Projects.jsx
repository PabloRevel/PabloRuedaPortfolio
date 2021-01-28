import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from "./../../components/card/card"

const Projects = () => {
    return ( 
        <section id="projects" style={{minHeight:"100vh"}}>
            <Container>
                <h1 style={{textAlign:"center", color:"#074b45", paddingTop:"3rem"}}>PROYECTOS</h1>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectOne"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS, React, Gatsby"} title={"Web Psicóloga"} 
                        gitLink={"https://github.com/Pablo-Rueda/SofiaRodriguez"} tryLink={"https://sofiarodriguezpsicologa.netlify.app/"}> 
                            <p> Proyecto autónomo de sitio web. Desarrollé el sitio desde cero, usando Figma e inkscape para el diseño, y React / Gatsby para el código.</p>
                            <p> Para la maquetación y diseño de componentes usé CSS, SASS y Material Ui. </p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectTwo"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS"} title={"Clon web de Apple"}
                        gitLink={"https://github.com/Pablo-Rueda/appleclone"} tryLink={"https://pablo-rueda.github.io/appleclone/"}> 
                            <p> Práctica de maquetación siguiendo el sitio web de apple (Uk November 2020). Me pareció una buena práctica de 
                            diseño responsive. Para la maquetación usé HTML, CSS y SASS. También hay varias funciones customizadas para 
                            la barra de navegación (que oscurece el fondo), el boton de navegación en mobiles y el botón de compra.</p>
                            <p> En general, usé solo recursos gratuitos (e.g. iconos de Fontawesome) o de la propia web de apple. </p>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectThree"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS, React, Gatsby"} title={"Fitness React App"}
                        gitLink={"https://github.com/Pablo-Rueda/Fitness-plus"} tryLink={"https://5f7f90bac946db00ea33da57--fitness-plus.netlify.app/"}> 
                        <p>Mi primera App completa con React. Implementa funcions propias de react para gestión de estado y hooks. Empleé CSS y SASS para el estilo.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card imgId={"projectFour"} color={"#06DDDD"} tech={"HTML, CSS, SASS, JS"} title={"Pacman"}
                        gitLink={"https://github.com/Pablo-Rueda/pacman"} tryLink={"https://pablo-rueda.github.io/pacman/"}> 
                            <p> Proyecto centralmente desarrollado para practicar el manejo del ambiente wen con Javascript, implementación de funciones y programación orientada a objetos.</p>
                            <p> El tablero está creado con un array numérico convertido a celdas mediante divs. Los fantasmas y pacman son objetos que heredan sus caracteristicas del mismo objeto parental (Creature).
                            Luego los fantasmas tienen métodos propios para generar el movimiento aleatorio, mientras que pacman tiene métodos para que sea controlado por el jugador.</p>
                        </Card>
                    </Grid>
                </Grid>
                
            </Container>
        </section>
     );
}
 
export default Projects;