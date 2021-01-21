import React from 'react';
import mediaStyles from "./media.module.scss";

const VideoBackground = (props) => {
    return ( 
        
        <header className={mediaStyles.videoHeader}>
            <video poster="./video/loadingVideo.png" loop muted autoPlay>
                <source
                src={require("./video/video.mp4")}
                type="video/mp4"
                />
            </video>
            <div className={mediaStyles.viewportHeader}>
                    {props.children}
            </div>
        </header>
     );
}
 
export default VideoBackground;
