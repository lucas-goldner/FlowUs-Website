import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CoverText from "../components/covertext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    marginTop: "1vw",
  },
  appbar: {
    background: "none",
    boxShadow: "none",
  },
  navtext: {
    fontFamily: "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif", 
    fontWeight: "500",
    color: "#D9F0FF",
    marginRight: "0.8rem",
    fontSize: "1rem",
    ["@media (max-width: 800px)"]: {
      fontSize: "0.9rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "0.8rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "0.7rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "0.6rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "0.8rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "0.6rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.3rem",
    },
  },
  imageLogo: {
    width: "20%",
    marginRight: theme.spacing(60),
    ["@media (max-width: 1500px)"]: {
      marginRight: theme.spacing(50),
    },
    ["@media (max-width: 1300px)"]: {
      marginRight: theme.spacing(40),
    },
    ["@media (max-width: 1200px)"]: {
      marginRight: theme.spacing(30),
    },
    ["@media (max-width: 1000px)"]: {
      marginRight: theme.spacing(20),
    },
    ["@media (max-width: 800px)"]: {
      marginRight: theme.spacing(5),
    },
    ["@media (max-width: 700px)"]: {
      marginRight: theme.spacing(5),
    },
    ["@media (max-width: 600px)"]: {
      marginRight: theme.spacing(1),
    },
  },
  loginButton: {
    width: "6.5rem",
    letterSpacing: "0em",
    color: "#405FB1",
    background: "#D9F0FF",
    border: "10px solid #D9F0FF",
    borderRadius: "20px",
    lineHeight: "0px",
    display: "default",
    "&:hover": {
      background: "#D9F0FF",
      fontSize: "1rem",
    },
  },
}));

function navbar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <img
              src="./method-draw-image.svg"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fontFamily="Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif"
              className={classes.imageLogo}
              alt="Logo"
            />
            <Typography variant="h2" className={classes.navtext}>
              MISSION
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              FEATURES
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              COMMUNITY
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              CONTACT US
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              TERMS OF SERVICES
            </Typography>
            <Button
              variant="contained"
              className={(classes.navtext, classes.loginButton)}
              disableElevation
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <CoverText />
      </div>
    </>
  );
}

export default navbar;