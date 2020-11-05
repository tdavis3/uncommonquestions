import React from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import SignUp from "./components/auth/SignUp";

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
                <Switch>
                    <Route path={"/"}>
                        <Navbar/>
                    </Route>
                </Switch>
                <section>
                    <Switch>
                        <Route exact path={"/"}>
                            <Landing/>
                        </Route>
                        <Route exact path={"/signup"}>
                            <SignUp/>
                        </Route>
                        <Route path="*">
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </section>
                <Switch>
                    <Route path={"/"}>
                        <Footer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
