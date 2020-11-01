import React from "react";

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from "@material-ui/core/Typography";
import Typical from 'react-typical';
import questions from '../../utils/animatedQuestions';

const useStyles = makeStyles({
    root: {
        color: "white",
        alignItems: "baseline"
    },
    animatedType: {
        fontSize: 25
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
        </div>
    );
};

export default Landing;
