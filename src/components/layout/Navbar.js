import React from "react";
import {AppBar, Toolbar, Button, Box} from "@material-ui/core";
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
        justifyContent: "space-around",
        alignItems: "baseline"
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
    },
    signUpButton: {
        marginLeft: 10,
        borderRadius: "5em",
        color: "white",
        backgroundColor: "#c7594b",  // or "orange", "#c7594b", "#b65fcf"
        '&:hover': {
            backgroundColor: "#c56b60",  // or "#d17064", "#c56b60"
        }
    }
}));

const SignUpButton = () => {
    const classes = useStyles();
    return (
        <Button component={Link} to={"/signup"} variant={"outlined"} className={classes.signUpButton}>
            Sign Up
        </Button>
    );
};

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position={"sticky"} color={"transparent"} style={{boxShadow: 'none'}}>
                <Toolbar className={classes.toolbar}>
                    <Box display={"flex"} className={classes.logo}>
                        <Link to={"/"} className={classes.logoLink}>UQ</Link>
                        <Link to={"/"} className={classes.betaLink}>(Beta)</Link>
                    </Box>
                    <Box display={"flex"} className={classes.navLinks}>
                        <Link to={"/questions"} className={classes.link}>Questions</Link>
                        <Link to={"/philosophy"} className={classes.link}>Philosophy</Link>
                        <Link to={"/login"} className={classes.link}>Log In</Link>
                        <SignUpButton/>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
