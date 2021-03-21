import React from "react";
import "./Model3d.css";
import CardItem from "./Cardmodel";
import { Animated } from "react-animated-css";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"; 
import Link from '@material-ui/core/Link';

function Model3d() {
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <div className="modelcards">
        <h1>** Modelagens 3D **</h1>
        <div className="modelcards__container">
          <div className="modelcards__wrapper">
            <ul className="modelcards__items">
              <CardItem src="images/model_1.jpg" path="/Model1" />
              <CardItem src="images/model_2.jpg" path="/Model2" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_3.jpg" path="/Model3" />
              <CardItem src="images/model_4.jpg" path="/Model4" />
              <CardItem src="images/model_5.jpg" path="/Model5" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_6.jpg" path="/Model6" />
              <CardItem src="images/model_7.jpg" path="/Model7" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_8.jpg" path="/Model8" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_9.jpg" path="/Model9" />
            </ul>
          </div>
        </div>
      </div>
      <Grid item xs={12} sm={12}>
        <div className="bodytexts1">
          <Typography variant="h2" component="h3">
            + Modelagens
          </Typography>
          <hr></hr>
          <br></br>
          <Typography variant="body1" component="body1">
            Para ver mais modelagens acesse o link abaixo:
            <p><Link
              href="https://www.behance.net/eticialima" 
            >
              https://www.behance.net/eticialima
            </Link> </p>
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </Grid>
    </Animated>
  );
}

export default Model3d;
