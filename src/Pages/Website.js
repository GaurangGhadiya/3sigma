import React, { Component, useEffect, useState, useRef } from "react";
import LoadingOverlay from "react-loading-overlay";
import { FacebookLoginButton } from "react-social-login-buttons";
import queryString from "query-string";

// MATERIAL COMP IMPORT
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Alert from "@material-ui/lab/Alert";

// UTILS CALL
import * as utils from "../constants/utils";

// API CALL IMPORT
import * as ApiCall from "../constants/ApiCall";

// COMPONENT IMPORT
import Header from "../Components/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

function Website(props) {
    // STATE
    const [integration, setIntegration] = useState(null);
    const [isActive, setIsActive] = useState(true);
    const [loadingText, setLoadingText] = useState(null);
    const [showAlert, toggleAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);


    // HOOKS
    useEffect(() => {
        ApiCall.getIntegration("POST", { user_id: props.match.params.user_id, key: "website" }, (err, res) => {
            setIsActive(false);
            if (!err) {
                console.log(res);
                setIntegration(res.data);
            }
        });
    }, []);

    const classes = useStyles();

    return (
        <LoadingOverlay active={isActive} spinner text={loadingText}>
            {!isActive && <Header />}
            <div className={classes.root}>
                {showAlert && <Alert severity={alertType}>{alertMessage}</Alert>}
                <CssBaseline />
                <Container component="main" className={classes.main} maxWidth="sm">
                    {!isActive && (
                        <>
                            <Typography variant="h5" component="h5" gutterBottom>
                                Website Integration Steps
                            </Typography>
                            <Typography variant="body1" component="h2" gutterBottom>
                                {"1. Copy generated script and paste it on your web page"}
                            </Typography>
                            <Grid container spacing={3}>
                                
                            </Grid>
                        </>
                    )}
                </Container>
            </div>
        </LoadingOverlay>
    );
}

export default Website;
