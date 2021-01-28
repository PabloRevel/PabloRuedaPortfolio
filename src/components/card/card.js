import React,{useState} from 'react';
// Style:
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cardStyles from "./card.module.scss";
import images from "./../data/images";
import Container from '@material-ui/core/Container';

// Components:
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "./../button/Button"

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Fira Sans',
            'sans-serif'
          ].join(','),
      
    },
});

const useStyles = makeStyles({
    root: {
        width: "100%",
        borderRadius:0,
        padding:0,
        margin:0,
    }
  });
  
  export default function MediaCard(props) {
    const classes = useStyles();

    const imgMain = {
        filter:"none",
    }
    const imgOnClick = {
        filter:"grayscale(100%) brightness(0.2) blur(3px)",
    }

    const textMain = {
        color:"transparent",
        paddingTop:"1.5rem"
    }
    const textOnClick = {
        color:"white",
        paddingTop:"1.5rem"
    }
    const [bolean, setBolean] = useState(true);
    const [card, setCard] = useState(imgMain);
    const [text, setText] = useState(textMain);

    const handleOnClick = () =>{
        setCard(bolean === true ? imgOnClick : imgMain)
        setText(bolean === true ? textOnClick : textMain)
        setBolean(!bolean)
    }
    return (
    <ThemeProvider theme={theme}><Card className={`${classes.root} ${cardStyles.card}` }>
        <Container className={cardStyles.text} style={text}>
            {props.children}
        </Container>  
        <CardMedia
            className={cardStyles.image}
            style={card}
            image={images[0][props.imgId]}
            title=""
        >
        </CardMedia>
        <CardContent style={{maxHeight:"6rem",borderTop:"10px solid "+props.color}}>
            <div className={cardStyles.content}>
                <h3>{props.title}</h3>
                <p>{props.tech}</p>
            </div>
            <div className={cardStyles.buttons}> 
                <button  className={cardStyles.infoIcon} onClick={()=>(handleOnClick())}> </button>
                <a href={props.tryLink} target="blank"><Button fontSize="18px" padding="0.5rem 1.5rem" mainColor="#8DBE49" hoverColor="white" type="secondary"> ¡Pruébalo! </Button></a>
                <a href={props.gitLink} target="blank"> <div className={cardStyles.gitIcon} /> </a>
            </div>
        </CardContent>
    </Card></ThemeProvider>
    );
  }