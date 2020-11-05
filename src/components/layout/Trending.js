import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        color: "white",
        alignItems: "baseline"
    },
    animatedType: {
        fontSize: 25
    }
});

const Trending = () => {
    const classes = useStyles();
    return (
        <Typography variant={"h5"}>Trending Questions</Typography>
    );
}

export default Trending;
