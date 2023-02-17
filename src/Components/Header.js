import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        borderBottom: "0.5px solid lightgrey",
    },
}));

export default function HideAppBar(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container component="main" className={classes.main} maxWidth="sm">
                <img src={window.location.origin + "/assets/images/3sigma-logo.png"} className={classes.logo} />
            </Container>
        </React.Fragment>
    );
}
