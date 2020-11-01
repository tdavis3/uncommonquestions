import React from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#282c34',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        textAlign: 'center'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header>
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<p>*/}
                {/*    A neutral and objective source of people's opinions on some of the country's hottest topics.*/}
                {/*</p>*/}
            </header>
            <section>
                <Navbar/>
                <Landing/>
                <Footer/>
            </section>
        </div>
    );
}

export default App;
