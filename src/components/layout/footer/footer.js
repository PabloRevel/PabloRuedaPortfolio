import React from 'react'
import footerStyles from "./footer.module.scss";
import {ImportImages} from "./../../"
const footer = () => {
    return ( 
        <div className={footerStyles.container}>
            <p className={footerStyles.text}>© 2021 Pablo Rueda</p>
            <div className={footerStyles.icons}>
                <a href="https://github.com/Pablo-Rueda" >
                    <ImportImages height="25px" imgId={"iconGit"} />
                </a>
                <a href="https://www.linkedin.com/in/pabloruedas/">
                    <ImportImages height="25px" imgId={"iconLinkedIn"} />
                </a>
                <a href="https://twitter.com/PabloRuedasj">
                    <ImportImages height="25px" imgId={"iconTwitter"} />
                </a>
            </div>
        </div>
     );
}
 
export default footer;