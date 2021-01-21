import React from 'react';
import images from "../data/images"

const imageExport = (props) => {
    const style = {
        padding: "0px", margin:"0px",
        height: props.height || "auto",
        width: props.width || "auto",
        borderRadius: props.borderRadius || "0%",
        boxShadow: props.boxShadow || "0px 0px 0px black",
      };
    return ( 
        <img src={images[0][props.imgId]} alt={props.alt} style={style} />
    );
}
 
export default imageExport;