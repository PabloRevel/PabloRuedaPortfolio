import React,{useState} from 'react';
import { FormattedMessage, injectIntl,IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"; //language

// Style & Structure: 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import headerStyles from "./header.module.scss";
import cx from "classnames";

//Components:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//Utilities:
import {useScrollPosition} from "./useScrollPosition"
import { Link } from 'react-scroll';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:"transparent"
    },
  }));
  
  export default injectIntl(function ButtonAppBar() {
    const languageName = {
      en: "EN",
      es: "ES",
    }
    const classes = useStyles();
    const [shadowOnScroll, setShadowOnScroll] = useState({backgroundPosition:"left bottom"});
    const [scrollPosition, setscrollPosition] = useState(0);
    const [hmbg, sethHmbg] = useState(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const shadow = -50 > currPos.y
        if(shadow){
            setShadowOnScroll({backgroundPosition:"left top"});
            setscrollPosition(1);
        }else{
            setShadowOnScroll({backgroundPosition:"left bottom"});
            setscrollPosition(0);
        }
      })
  
    return (
      <div>
        <AppBar  position="fixed" className={classes.root}>
          <Toolbar className={cx(headerStyles.navBar,(scrollPosition?headerStyles.bottom:headerStyles.top))} style={shadowOnScroll}>
          <div 
          className={cx(headerStyles.hamburguer,(hmbg?headerStyles.open:headerStyles.close))}
          onClick={()=>{sethHmbg(!hmbg)}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Link className={headerStyles.navItem} smooth duration={1000} to="main">MAIN</Link>
              <Link className={headerStyles.navItem} smooth duration={1000} to="about">ABOUT</Link>
              <Link className={headerStyles.navItem} smooth duration={1000} to="skills">SKILLS</Link>
              <Link className={headerStyles.navItem} smooth duration={1000} to="projects">PROJECTS</Link>
              <Link className={headerStyles.navItem} smooth duration={1000} to="contact">CONTACT</Link>
              <div> 
                <div style={{display:"flex"}}>
                  <IntlContextConsumer>
                    {({ languages, language: currentLocale }) =>
                      languages.map(language => (
                        <div key={language}>
                          <button
                            onClick={() => changeLocale(language)}
                            className={cx(headerStyles.languageBtn,
                            
                            ((currentLocale===language)?headerStyles.darkGreen:(
                              scrollPosition?headerStyles.black:headerStyles.white)
                              ))}
                            >
                            
                            {languageName[language]}
                          </button>

                        </div>
                      ))
                    }
                  </IntlContextConsumer>
                </div>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={cx(headerStyles.hambgMenu,(hmbg?headerStyles.block:headerStyles.none))}>
        <Grid container direction="column" justify="flex-end" alignItems="center" className={headerStyles.hambgGrid}>
              <Link className={headerStyles.hambgItem} smooth duration={1000} to="main" onClick={()=>{sethHmbg(!hmbg)}}>MAIN</Link>
              <Link className={headerStyles.hambgItem} smooth duration={1000} to="about" onClick={()=>{sethHmbg(!hmbg)}}>ABOUT</Link>
              <Link className={headerStyles.hambgItem} smooth duration={1000} to="skills" onClick={()=>{sethHmbg(!hmbg)}}>SKILLS</Link>
              <Link className={headerStyles.hambgItem} smooth duration={1000} to="projects" onClick={()=>{sethHmbg(!hmbg)}}>PROJECTS</Link>
              <Link className={headerStyles.hambgItem} smooth duration={1000} to="contact" onClick={()=>{sethHmbg(!hmbg)}}>CONTACT</Link>
        </Grid>
        </div>
      </div>
    );
  })