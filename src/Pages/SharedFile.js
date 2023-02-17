import React, { Component, useEffect, useState, useRef } from "react";
import LoadingOverlay from "react-loading-overlay";
import FileViewer from "react-file-viewer";

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
import ContantFileHeader from "../Components/ContantFileHeader";
import FileContant from "../Components/FileContant";
import ShareCard from "../Components/ShareCard";

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

function SharedFile(props) {
  // CONSTANTS
  const { userIdEncrypted, uniqueLinkId, content_id } = props.match.params;

  // STATE
  const [isActive, setLoader] = useState(true);
  const [showLoaderSpinner, setShowLoaderSpinner] = useState(true);
  const [loaderMessage, setLoaderMessage] = useState("Loading file");
  const [file, setFile] = useState(null);

  // METHODS

  // HOOKS
  useEffect(() => {
    ApiCall.get_content_by_id("POST", { content_id }, (err, res) => {
      if (err) {
        setLoaderMessage("Link expired");
        setShowLoaderSpinner(false);
      } else {
        setFile(res.data.content_details.file);
        setLoader(false);
        setShowLoaderSpinner(false);
      }
    });
    ApiCall.increment_activity_view_count(
      "POST",
      { uniqueLinkId },
      (err, res) => {}
    );
  }, []);

  const classes = useStyles();
  if (file) {
    console.log(file.name.split(".")[file.name.split(".").length - 1]);
  }
  if (
    file &&
    ["jpg", "png", "gif", "jpeg"].includes(
      file.name.split(".")[file.name.split(".").length - 1].toLowerCase()
    )
  ) {
    return (
      <LoadingOverlay
        active={isActive}
        spinner={showLoaderSpinner}
        text={loaderMessage}
      >
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="lg">
            <img src={file.fileUrl} alt={file.name} />
          </Container>
        </div>
      </LoadingOverlay>
    );
  } else {
    return (
      <LoadingOverlay>
        <div style={{background : "white"}}>

        <ContantFileHeader userName="Vivek Rana" fileName="File name"/>
        <FileContant />
        <ShareCard />
        </div>
        {/* <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            {file && (
              <FileViewer
                fileType={file.name.split(".")[file.name.split(".").length - 1]}
                filePath={file.fileUrl}
              />
            )}
          </Container>
        </div> */}
      </LoadingOverlay>
    );
  }
}

export default SharedFile;
