import React from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
        <Router>
            <div className={classes.root}>
                <section>
                    <Navbar/>
                    <Landing/>
                    <Footer/>
                </section>
            </div>
        </Router>
    );
}

export default App;
