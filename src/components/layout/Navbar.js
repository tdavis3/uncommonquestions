import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    logo: {
        color: "white",
        alignItems: "baseline"
    },
    beta: {
        fontSize: 10
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position={"sticky"} color={"transparent"} style={{boxShadow: 'none'}}>
                <Toolbar>
                    <Box display={"flex"} className={classes.logo}>
                        <Typography variant={"h4"}> UQ </Typography>
                        <Typography variant={"caption"} className={classes.beta}> (Beta) </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
