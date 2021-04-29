import React from "react";
import "./Sobre.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import { Animated } from "react-animated-css";

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Sobre() {
  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className="bodysobre">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <div className="titlehome">
              <h1>** Lorem Ipsum  **</h1>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div>
                  <img src="images/home.png" className="imgsobrecard"></img>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h3">
                Lorem Ipsum 
                </Typography>
                <hr></hr>
                <br></br>
                <Typography variant="h5" component="h2">
                  Lorem ipsum elementum inceptos donec fames dapibus eleifend
                  porta sapien quis, taciti nec elit sapien aenean habitasse
                  praesent donec. justo sed duis tellus sollicitudin quisque
                  vehicula turpis malesuada magna, curae suspendisse feugiat
                  nunc lobortis fermentum non.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2">
                  tellus facilisis dictum hac ipsum vestibulum sem aptent ac nam
                  laoreet, lobortis lectus libero vitae habitant sociosqu
                  volutpat ante volutpat torquent, massa aptent pulvinar tellus
                  duis molestie netus est himenaeos.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2">
                  a odio rutrum viverra mi tincidunt suspendisse, justo ipsum
                  consequat dictumst sagittis gravida, elit tellus curae amet
                  fermentum. adipiscing enim ornare amet varius sed cras aptent,
                  nisl curabitur nunc dictumst tortor mauris.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2">
                  Lorem ipsum elementum inceptos donec fames dapibus eleifend
                  porta sapien quis
                </Typography>
                <br></br>
                <Button size="large" variant="outlined" href="/" target="blank">
                  DOWNLOAD_CV
                </Button>
              </Grid>
            </Grid>
          </Animated>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <Animated
            animationIn="zoomIn"
            animationOut="fadeOut"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <Grid item xs={12} sm={12}>
              <div className=" bodysobre ">
                <Typography variant="h2" component="h3">
                Lorem Ipsum 
                </Typography>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Lorem Ipsum **
                  </Typography>
                  <Progress done="80" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Lorem Ipsum **
                  </Typography>
                  <Progress done="75" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Lorem Ipsum **
                  </Typography>
                  <Progress done="60" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Lorem Ipsum **
                  </Typography>
                  <Progress done="55" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Lorem Ipsum **
                  </Typography>
                  <Progress done="50" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Lorem Ipsum **
                  </Typography>
                  <Progress done="30" />
                </div>
              </div>
            </Grid>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Animated>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Sobre;
