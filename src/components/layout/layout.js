import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// Components:
import Header from "./header/header"
import Footer from "./footer/footer"
// Style:
import layoutStyles from "./layout.module.scss";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgb(9,174,162)",
        dark: "rgb(3,77,88)",
      },
      secondary: {
        main: 'rgb(245,161,110)',
      },
    },
  });

const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </ThemeProvider>
     );
}
 
export default Layout;