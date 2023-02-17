import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

// API CALL IMPORT
import * as ApiCall from "../constants/ApiCall";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "relative",
        marginTop: theme.spacing(8),
        padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",

        "&:hover": {
            boxShadow: "0px 24px 36px rgba(131,153,167,0.99)",
        },
    },
    logo: {
        height: "40px",
        aspectRatio: 1,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#3faefc",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

export default function SignUp(props) {
    // CONSTANTS
    const classes = useStyles();
    const { userIdEnc } = props.match.params;

    // STATES
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [showAlert, toggleAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);
    const [open, setOpen] = React.useState(false);

    // METHODS
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const signUp = (event) => {
        event.preventDefault();
        if (!name) {
            toggleAlert(true);
            setAlertMessage("Field name cannot be empty");
            setAlertType("error");
            return;
        }
        if (!email) {
            toggleAlert(true);
            setAlertMessage("Field email cannot be empty");
            setAlertType("error");
            return;
        }
        if (!validateEmail(email)) {
            toggleAlert(true);
            setAlertMessage("Email should be a valid one");
            setAlertType("error");
            return;
        }
        if (!password) {
            toggleAlert(true);
            setAlertMessage("Field password cannot be empty");
            setAlertType("error");
            return;
        }
        if (!confirmPassword) {
            toggleAlert(true);
            setAlertMessage("Field confirm password cannot be empty");
            setAlertType("error");
            return;
        }
        if (password != confirmPassword) {
            toggleAlert(true);
            setAlertMessage("Password does not match");
            setAlertType("error");
            return;
        }
        const body = {
            name,
            email,
            password,
            loginType: "email",
            referred_id: userIdEnc,
        };
        setOpen(true);
        ApiCall.registerReferral("POST", body, (err, res) => {
            console.log(res, res.message);
            if (err) {
                setOpen(false);
                setAlertMessage(res.message);
                setAlertType("error");
                toggleAlert(true);
            } else {
                window.location = "https://www.3sigmacrm.com/";
            }
        });
    };

    return (
        <>
            {showAlert && <Alert severity={alertType}>{alertMessage}</Alert>}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper className={classes.paper}>
                    <img src={window.location.origin + "/assets/images/logo.png"} className={classes.logo} />
                    <Typography component="h1" variant="h5">
                        INVITE SIGN UP
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth id="name" label="Name" name="name" autoComplete="first-name" onChange={(e) => setName(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="current-password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={signUp}>
                            Sign Up
                        </Button>
                    </form>
                </Paper>
            </Container>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}
