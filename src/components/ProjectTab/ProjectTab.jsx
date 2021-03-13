import React from 'react';

import projectTabStyles from "./ProjectTab.module.scss";

import {Grid, Card, CardActionArea, CardMedia,CardContent, Typography} from '@material-ui/core';
import {Button, ImportImages} from "./../index"
import { FormattedMessage } from "gatsby-plugin-intl"; //language

const ProjectTab = (props) => {
    
    return ( 
        <div className={projectTabStyles.container} style={props.display}>
            <Card className={projectTabStyles.card}>
                <a href="javascript:void(0)" className={projectTabStyles.close} onClick={()=>{props.handleDisplayChange("Pablo Rueda Portfolio",{display:"none"})}}>&times;</a>
                <Grid>
                    <CardActionArea style={{cursor:"default"}}>
                    <CardMedia 
                                image={(props.project.gif? props.project.gif : props.project.image)} 
                                className={projectTabStyles.image}
                                />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="h5"> <FormattedMessage id={props.project.name}  /></Typography>
                        <Typography variant="subtitle1"> <FormattedMessage id={props.project.description}  /> </Typography>
                        <div style={{display:"flex", alignItems:"center"}}>
                            
                            <a href={props.project.url} target="blank"> <div style={{margin:"10px 20px 0 0"}}> 
                                <Button padding="0.75rem 2rem" fontSize="20px" mainColor="#8DBE49">
                                    <FormattedMessage id="projects.button"  />
                                </Button> 
                            </div></a>
                            <a href={props.project.git} target="blank"> 
                                <div className={projectTabStyles.gitHubLink}>
                                <ImportImages 
                                    heigth="50px" 
                                    width="50px" 
                                    borderRadius="50%" 
                                    imgId={"iconGit" }
                                /> 
                                <Typography variant="subtitle1" style={{margin:"0 10px"}}> GitHub </Typography>
                                </div>
                            </a>
                        </div>
                    </CardContent>
                </Grid>
            </Card>
        </div>
     );
}
 
export default ProjectTab;