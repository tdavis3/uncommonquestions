import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from "@material-ui/core/Typography";

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
        color: 'white'
    }
}));

function Copyright() {
    return (
        <Typography variant="body2">
            {'© '}{new Date().getFullYear()}{' '} TDIII Group, LLC
        </Typography>
    );
}


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Typography>Uncommon Questions</Typography>
            <Copyright/>
        </footer>
    );
};

export default Footer;