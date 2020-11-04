import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        // backgroundColor: 'white',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid lightgray',
        marginTop: theme.spacing(3),
        padding: 15,
        boxSizing: "border-box",
        color: "lightgrey"
    },
    contact: {
        "&:hover": {
            color: 'white'
        },
        textDecoration: "none",
        color: "lightgrey"
    }
}));

function Copyright() {
    return (
        <Typography>
            {'© '}{' '} Uncommon Questions {new Date().getFullYear()}
        </Typography>
    );
}

function Contact() {
    const classes = useStyles();
    return (
        <a href={"mailto: info@uncommonquestions.org"} className={classes.contact}>info@uncommonquestions.org</a>
    );
}

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Copyright/>
            <Contact/>
        </footer>
    );
};

export default Footer;
