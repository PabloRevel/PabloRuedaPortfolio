import React from 'react';
import mediaStyles from "./media.module.scss";

const VideoBackground = (props) => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
      };

    return ( 
        
        <header className={mediaStyles.videoHeader}>
            <img
                className={mediaStyles.tiny}
                src={require("./video/loadingVideo.png")}
                alt="thumb"
                style={{ opacity: isVideoLoaded ? 0 : 1 }}
            />
            <video loop muted autoPlay
                onLoadedData={onLoadedData}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
            >
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
