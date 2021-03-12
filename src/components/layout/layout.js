import React from 'react';
import { injectIntl } from "gatsby-plugin-intl"; //language

// Components:
import Header from "./header/header"
import Footer from "./footer/footer"
// Style:
import layoutStyles from "./layout.module.scss";

const Layout = (props) => {
    return (
        <div>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
     );
}
 
export default injectIntl(Layout);