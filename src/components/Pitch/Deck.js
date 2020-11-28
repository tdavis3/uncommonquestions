import React from "react";
import deckPDF from "../../docs/pitch.pdf";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
        deck: {
            color: "white",
            marginTop: 50,
            marginBottom: 50
        },
        deckLink: {
            fontSize: 25,
            color: "white"
        }
    }
));

const Deck = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant={"h3"} className={classes.deck}>Our Pitch Deck</Typography>
            <a className={classes.deckLink} href={deckPDF} target="_blank" rel="noopener noreferrer">View deck</a>
        </div>
    );
};

export default Deck;