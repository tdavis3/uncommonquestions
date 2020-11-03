import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    toolbar: {
        justifyContent: "space-between",
        paddingLeft: 40,
        paddingRight: 40
    },
    logo: {
        color: "white",
        alignItems: "baseline"
    },
    navLinks: {
        justifyContent: "space-around"
    },
    link: {
        padding: 10,
        textDecoration: "none",
        color: "white"
    },
    betaLink: {
        fontSize: 10,
        textDecoration: "none",
        color: "white"
    },
    logoLink: {
        textDecoration: "none",
        color: "white",
        ...theme.typography.h4
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position={"sticky"} color={"transparent"} style={{boxShadow: 'none'}}>
                <Toolbar className={classes.toolbar}>
                    <Box display={"flex"} className={classes.logo}>
                        <Link to={"/"} className={classes.logoLink}>UQ</Link>
                        <Link to={"/"} className={classes.betaLink}>(Beta)</Link>
                    </Box>
                    <Box display={"flex"} className={classes.navLinks}>
                        <Link to={"/questions"} className={classes.link}>Questions</Link>
                        <Link to={"/philosophy"} className={classes.link}>Philosophy</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
