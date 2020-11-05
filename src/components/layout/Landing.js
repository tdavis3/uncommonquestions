import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Grid, Typography} from "@material-ui/core";
import Typical from 'react-typical';
import questions from '../../utils/animatedQuestions';
import Trending from "./Trending";

const useStyles = makeStyles({
    root: {
        color: "white",
        alignItems: "baseline"
    },
    animatedType: {
        fontSize: 25
    },
    body: {
        marginTop: 60
    }
});

const Landing = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant={"h3"}>Uncommon Questions</Typography>
            <Typical
                steps={questions}
                loop={Infinity}
                wrapper={"p"}
                className={classes.animatedType}
            />
            <Grid container className={classes.body}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Trending/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Landing;
