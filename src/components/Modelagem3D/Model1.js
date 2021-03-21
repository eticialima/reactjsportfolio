import React from "react";
import "./Modelpag.css";
import CardItem from "../Cardmodel";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Animated } from "react-animated-css";
import { Button } from "../Button";
import { makeStyles } from "@material-ui/core/styles";

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

function Model1() {
  const classes = useStyles();
  return (
    <>
      <div className="rowbody">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              xs={12}
            >
              <Animated
                animationIn="zoomIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
              >
                <Typography variant="h2" component="h3">
                  Aranha Mecânica
                </Typography>
                <hr></hr>
                <br></br>
                <Typography variant="body1" component="body1">
                  Modelagem de aranha modificada com acessorio nas costa cujo nome é uma "Fornalia do tempo". 
                  Essa aranha é uma personagem fictício criado por mim, onde esse objeto será atuado em uma historia em um game. 
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h4" component="h5">
                  Detalhes
                </Typography>
                <br></br>
                <Typography variant="h6" component="h6">
                  <li>Data: Fevereiro 2020</li>
                  <li>Programa: Blender 2.8 </li> 
                </Typography>
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
        <div className="modelcards">
          <div className="modelcards__container">
            <div className="modelcards__wrapper">
              <ul className="modelcards__items">
                <CardItem src="images/model_1.jpg" />
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
            <a
              href="https://www.behance.net/gallery/91639551/Spider-mecanic-wall"
              target="blank"
            >
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Behance
              </Button>
            </a>
            <a href="/Modelagem">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Voltar
              </Button>
            </a>
          </div>
        </div>
      </Animated>
    </>
  );
}

export default Model1;
