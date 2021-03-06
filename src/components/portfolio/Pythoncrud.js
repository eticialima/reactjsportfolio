import React from "react";
import "./Portfoliopag.css";
import CardItem from "../Cardmodel";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Animated } from "react-animated-css";
import { Button } from "../Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import Link from "@material-ui/core/Link";

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

function Pythoncrud() {
  const classes = useStyles();
  return (
    <>
      <div className="rowbody">
        <div className={classes.root}>
          <div className="titlehome">
            <h1>** Lorem ipsum elementum inceptos donec **</h1>
          </div>
          <Grid container spacing={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              xs={6}
            >
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
              >
                <Typography variant="h5" component="h5">
                    Lorem ipsum elementum
                </Typography>
                <hr></hr>
                <br></br>
                <Typography variant="body1" component="body1">
                Lorem ipsum elementum inceptos donec fames dapibus eleifend porta sapien quis, taciti nec elit sapien aenean habitasse praesent donec. 
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h4" component="h5">
                Lorem ipsum 
                </Typography>
                <br></br>
                <Typography variant="h6" component="h6">
                  <li>-(create, read, update, delete)</li>
                  <li>-Template</li>
                  <li>-HTML/CSS/Bootstrap</li>
                  <li>-Banco de Dados e Formul??rio</li>
                  <li>-Create e Read</li>
                  <li>-Update</li>
                  <li>-Delete e Ajax</li>
                  <li>-Pagina????o e Busca</li>
                  <li>-MySQL/PostgreSQL</li>
                  <li>-Deploy com PostgreSQL</li>
                  <li>-Deploy com MySQL</li>
                </Typography>
                <br></br>
                <br></br>

                <Typography variant="h5" component="h5">
                Lorem ipsum
                </Typography> 
              </Animated>
            </Grid>
            <Grid container
              direction="row"
              justify="center" 
              item xs={6}>
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
              >
                <Typography variant="h5" component="h5">
                  Video Lorem ipsum
                </Typography>
                <hr></hr>
                <br></br>
                <Typography variant="body1" component="body1">
                Lorem ipsum elementum inceptos donec fames dapibus eleifend porta sapien quis, taciti nec elit sapien aenean habitasse praesent donec. 
                </Typography>
                <br></br>
                <br></br>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls={true}
                    url="https://www.youtube.com/watch?v=VKT8viikydQ"
                  />
                </div>
              </Animated>
            </Grid>
          </Grid>
        </div>
      </div>
      <Animated
        animationIn="zoomIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="portcards">
          <div className="portcards__container">
            <div className="portcards__wrapper">
              <ul className="portcards__items">
                <CardItem src="images/img-1.jpg" />
              </ul>
            </div>
          </div>
        </div> 
      </Animated>
      <br></br>
      <br></br>
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="footer-button">
          <div className="hero-btns">
            <a href="https://github.com/eticialima" target="blank">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Github
              </Button>
            </a>
            <a href="/Portfolio">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Back
              </Button>
            </a>
          </div>
        </div>
      </Animated>
    </>
  );
}

export default Pythoncrud;
