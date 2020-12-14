import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  width: {
    width: "100%",
  },
  grid: {
    marginTop: "1rem",
    overflowX: "hidden",
    "& label.Mui-focused": {
      color: "purple",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "purple",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "purple",
      },
      "&:hover fieldset": {
        borderColor: "purple",
      },
      "&.Mui-focused fieldset": {
        borderColor: "purple",
      },
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "purple",
    },
  },
  mainButton: {
    backgroundColor: "#56377E",
    position: "center",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "7rem",
    marginRight: "3rem",
    borderRadius: "30px",
  },
  launchButton: {
    marginTop: "2rem",
    backgroundColor: "#56377E",
    position: "center",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "30rem",
    marginRight: "3rem",
    borderRadius: "30px",
  },
  title: {
    fontSize: "3rem",
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "bold",
  },
  descr: {
    fontSize: "1.5rem",
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "lighter",
  },
  InputField: {
    marginTop: "5rem",
    width: "30rem",
  },
}));

function launchticket() {
  const classes = useStyles();
  const [info, setInfo] = useState();
  return (
    <>
      <Grid container direction="column" className={classes.grid}>
        <Grid item className={classes.width}>
          <Grid
            container
            justify="space-between"
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="193"
                height="41"
                viewBox="0 0 193 41"
              >
                <rect
                  id="Rechteck_1062"
                  data-name="Rechteck 1062"
                  width="41"
                  height="8"
                  transform="translate(0 41) rotate(-90)"
                  fill="#56377e"
                />
                <g
                  id="Gruppe_70166"
                  data-name="Gruppe 70166"
                  transform="translate(-58 -53)"
                >
                  <rect
                    id="Rechteck_1060"
                    data-name="Rechteck 1060"
                    width="29"
                    height="7"
                    transform="translate(61 87)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1061"
                    data-name="Rechteck 1061"
                    width="21"
                    height="7"
                    transform="translate(69 70)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1063"
                    data-name="Rechteck 1063"
                    width="28"
                    height="7"
                    transform="translate(69 53)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1064"
                    data-name="Rechteck 1064"
                    width="41"
                    height="8"
                    transform="translate(93 94) rotate(-90)"
                    fill="#56377e"
                  />
                  <text
                    id="LiFit_App"
                    data-name="LiFit App"
                    transform="translate(119 85)"
                    fill="#56377e"
                    fontSize="30"
                    fontFamily="OpenSans-Bold, Open Sans, Arial"
                    fontWeight="700"
                  >
                    <tspan x="0" y="0">
                      LiFit App
                    </tspan>
                  </text>
                </g>
              </svg>
            </Grid>
            <Grid item>
              <Button size="medium" className={classes.mainButton}>
                Main
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item md={6}>
              <Grid
                container
                alignItems="flex-start"
                alignContent="center"
                direction="column"
              >
                <Grid item>
                  <Typography component="h1" className={classes.title}>
                    LiFit App Launch Ticket
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h2" className={classes.descr}>
                    The first Social Media Fitness App on the market! <br />{" "}
                    <br />
                    Compare with your friends, create sport
                    <br /> communities, use fitness tools and much more
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    label="Email / Phone number"
                    variant="outlined"
                    type="email"
                    className={classes.InputField}
                    value={info}
                    onChange={(event) => setInfo(event.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button className={classes.launchButton} size="large">
                    Receive a ticket at launch
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <img
                src="./launchticket.svg"
                alt="Two Phones with Screenshots of the LiFit App"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default launchticket;
