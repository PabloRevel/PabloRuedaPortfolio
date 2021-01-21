import React from 'react';
import buttonStyles from "./button.module.scss";

const Button = (props) => {

  const style = {
    padding: props.padding || "1rem 3rem",
    fontSize: props.fontSize || "24px",
    border: props.border || "0px solid #06DDDD",
    fontFamily: props.fontFamily || "Fira Sans, sans-serif"
  };


    return (
        <p className={`${buttonStyles.btn} ${buttonStyles.btnMain}`} style={style} >
          {props.children}
        </p>
    );
}
 
export default Button;