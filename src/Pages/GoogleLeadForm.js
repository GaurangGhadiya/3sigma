import React, { Component, useEffect, useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LoadingOverlay from "react-loading-overlay";

// MATERIAL COMP IMPORT
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";

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
    
function Zapier(props) {
  // STATE
  const [isActive, setIsActive] = useState(
    true
  );
  const isPremiumUser =
    props.match.params.user_type === "premium" ? true : false;

  const [loadingText, setLoadingText] = useState(null);
  const [integration, setIntegration] = useState(null);
  const [api_key, setAPI_KEY] = useState(null);

  // METHODS
  const integrationDone = () => {
    setIsActive(true);
    setLoadingText("Linking With Google Lead Form");
    const body = {
      user_id: props.match.params.user_id,
      integration_key: "google_lead_form",
      value: true,
    };
    ApiCall.toggleIntegration("POST", body, (err, res) => {
      if (!err) {
        props.history.push({
          pathname: `/integration/success`,
        });
      }
    });
  };

  const integrationDisconnect = () => {
    setIsActive(true);
    setLoadingText("Disconnecting Integration");
    ApiCall.disconnectIntegration(
      "POST",
      { user_id: props.match.params.user_id, key: "google_lead_form" },
      (err, res) => {
        if (!err) {
          props.history.push({
            pathname: `/disconnect/success`,
          });
        }
      }
    );
  };

  // LIFECYCLE
  useEffect(() => {
    ApiCall.googleIntegration(
      "POST",
      { user_id: props.match.params.user_id },
      (err, res) => {
        if (!err) {
          setAPI_KEY(res.data.api_key);
        }
      }
    );

    ApiCall.getIntegration(
      "POST",
      { user_id: props.match.params.user_id, key: "google_lead_form" },
      (err, res) => {
        setIsActive(false);
        if (!err) {
          console.log(res);
          setIntegration(res.data);
        }
      }
    );
  }, []);

  const classes = useStyles();

  return (
    <LoadingOverlay active={isActive} spinner text={loadingText}>
      {!isActive && <Header />}
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          {!isActive && isPremiumUser ? (
            <>
              <Typography variant="h5" component="h5" gutterBottom>
                Google Lead Form Integration Steps
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {"1. Sign in to your Google Ads account."}
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {
                  "2. Click Ads & extensions in the page menu, and then click Extensions"
                }
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {"3. Click Lead form on the “Extensions” page"}
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {
                  "4. Hover over the lead form extension and click the pencil icon Edit to edit."
                }
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {
                  "5. Under 'Webhook integration', add provided webhook URL and webhook key."
                }
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {
                  "6. Click Send test data and verify if 3Sigma CRM receives the data correctly."
                }
              </Typography>
              <Typography variant="body1" component="h2" gutterBottom>
                {
                  "7. When you finish creating the lead form extension, click Save."
                }
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Webhook URL"
                    value={
                      "https://threesigma-backend-production.herokuapp.com/leads/google-lead-form"
                    }
                    contentEditable={false}
                    style={{ marginTop: "20px" }}
                    fullWidth
                    // focused={api_key ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CopyToClipboard
                    text={
                      "https://threesigma-backend-production.herokuapp.com/leads/google-lead-form"
                    }
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ backgroundColor: "#3faefc" }}
                    >
                      COPY TO CLIPBOARD
                    </Button>
                  </CopyToClipboard>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Google lead form Auth API key"
                    value={api_key}
                    contentEditable={false}
                    style={{ marginTop: "20px" }}
                    fullWidth
                    focused={api_key ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CopyToClipboard text={api_key}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ backgroundColor: "#3faefc" }}
                    >
                      COPY TO CLIPBOARD
                    </Button>
                  </CopyToClipboard>
                </Grid>
                {!integration && (
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={integrationDone}
                      style={{ backgroundColor: "#3faefc" }}
                    >
                      DONE
                    </Button>
                  </Grid>
                )}
                {integration && (
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={integrationDisconnect}
                      style={{ backgroundColor: "#3faefc" }}
                    >
                      DISCONNECT INTEGRATION
                    </Button>
                  </Grid>
                )}
              </Grid>
            </>
          ) : (
            <Typography variant="body1" component="h2" gutterBottom>
              Purchase a plan to enable this integration
            </Typography>
          )}
        </Container>
      </div>
    </LoadingOverlay>
  );
}

export default Zapier;
