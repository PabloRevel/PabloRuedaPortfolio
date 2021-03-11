import React from 'react';
import videoStyles from "./video.module.scss";

const Video = (props) => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
      };

    return ( 
        
        <header className={videoStyles.videoHeader}>
            <img
                className={videoStyles.tiny}
                src={require("./loadingVideo.png")}
                alt="thumb"
                style={{ opacity: isVideoLoaded ? 0 : 1 }}
            />
            <video loop muted autoPlay
                onLoadedData={onLoadedData}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
            >
                <source
                src={require("./video.mp4")}
                type="video/mp4"
                />
            </video>
            <div className={videoStyles.viewportHeader}>
                    {props.children}
            </div>
        </header>
     );
}
 
export default Video;
