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
import ImageCrousel from "../Components/ImageCrousel";
import FindOut from "../Components/FindOut";
import TextBlock from "../Components/TextBlock";
import PdfCarousel from "../Components/PdfCarousel";
import VideoCarousel from "../Components/VideoCarousel";
import Maps from "../Components/Maps";

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
    const { uniqueLinkId } = props.match.params;

    // STATE
    const [isActive, setLoader] = useState(true);
    const [showLoaderSpinner, setShowLoaderSpinner] = useState(true);
    const [loaderMessage, setLoaderMessage] = useState("Loading Page");
    const [pageContent, setPageContent] = useState(null);

    // METHODS

    // HOOKS
    useEffect(() => {
        ApiCall.get_page_contents("POST", { uniqueLinkId }, (err, res) => {
            if (err) {
                setLoaderMessage("Link expired");
                setShowLoaderSpinner(false);
            } else {
                if (!res.data.content) {
                    setLoaderMessage("Page not available anymore");
                    setShowLoaderSpinner(false);
                } else {
                    setPageContent(res.data);
                    setLoader(false);
                    setShowLoaderSpinner(false);
                    try {
                        const coords = [res.data.content.content_details.coords.latitude, res.data.content.content_details.coords.longitude];
                        window.initMap(parseFloat(coords[0]), parseFloat(coords[1]));
                    } catch (err) {
                        const coords = res.data.content.content_details.coords.split(",");
                        window.initMap(parseFloat(coords[0]), parseFloat(coords[1]));
                    }
                }
            }
        });
        ApiCall.increment_activity_view_count("POST", { uniqueLinkId }, (err, res) => {});
    }, []);

    const classes = useStyles();

    return (
        <LoadingOverlay>
        <div style={{background : "white"}}>

        <ContantFileHeader userName="Vivek Rana" fileName="File name"/>
            <ImageCrousel />
            <FindOut />
            <TextBlock />
            <PdfCarousel />
            <VideoCarousel />
            <Maps />
        <ShareCard />
        </div>
        
      </LoadingOverlay>
    );
}

export default SharedFile;
