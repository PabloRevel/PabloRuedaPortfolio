import React,{useState} from 'react';
import buttonStyles from "./button.module.scss";

const Button = (props) => {

  const main = {
    backgroundColor: props.mainColor || "#06DDDD",
    color:"white",
    padding: props.padding || "1rem 3rem",
    fontSize: props.fontSize || "24px",
    borderRadius: props.borderRadius || "0px",
    border: props.border || "0px solid #06DDDD",
    fontFamily: props.fontFamily || "Fira Sans, sans-serif"
  };
  const hover = {
    color: props.mainColor || "#06DDDD",
    padding: props.padding || "1rem 3rem",
    fontSize: props.fontSize || "24px",
    borderRadius: props.borderRadius || "0px",
    border: props.border || "0px solid #06DDDD",
    fontFamily: props.fontFamily || "Fira Sans, sans-serif"

  }

  const [style, setStyle] = useState(main);

    return (
        <p className={`${buttonStyles.btn} ${buttonStyles.btnMain}`} style={style}            
          onMouseEnter={()=>setStyle(hover)} 
          onMouseLeave={()=>setStyle(main)}>    
              {props.children}
        </p>
    );
}
 
export default Button;