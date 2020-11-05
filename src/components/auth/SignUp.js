import React from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        color: "white",
        paddingTop: 40
    }
});

const SignUp = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant={"h4"}>Sign up for Uncommon Questions</Typography>
        </div>
    );
}

export default SignUp;
