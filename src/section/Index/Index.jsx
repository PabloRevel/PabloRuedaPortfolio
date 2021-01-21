import React from 'react';
import VideoBackground from "../../components/media/videoBackground";
import indexStyles from "./index.module.scss";
import ImageExport from "./../../components/media/imageExport"
import Button from "../../components/button/Button"

const Index = () => {
    return ( 
        <div>
            <VideoBackground> 
                <div className={indexStyles.content}>
                    <div>
                        <ImageExport 
                            heigth="250px" 
                            width="250px" 
                            borderRadius="50%" 
                            boxShadow="0px 0px 15px #18ffff"
                            imgId="profile" 
                        />
                    </div>
    
                    <h1>Pablo Rueda</h1>
                    <h3>Web Development</h3>
                    <div className={indexStyles.buttons}>
                        <Button mainColor="#8DBE49">Know More</Button>
                    </div>
                </div>
            </VideoBackground>
            <div style={{height:"100vh"}}></div>
        </div>
     );
}
 
export default Index;