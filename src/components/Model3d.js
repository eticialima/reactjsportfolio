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
              <CardItem src="images/model_2.jpg" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_3.jpg" />
              <CardItem src="images/model_4.jpg" />
              <CardItem src="images/model_5.jpg" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_6.jpg" />
              <CardItem src="images/model_7.jpg" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_8.jpg" />
            </ul>
            <ul className="modelcards__items">
              <CardItem src="images/model_9.jpg" />
            </ul>
          </div>
        </div>
      </div>
      <Grid item xs={12} sm={12}>
        <div className="bodytexts1">
          <Typography variant="h2" component="h3">
            + Lorem Ipsum
          </Typography>
          <hr></hr>
          <br></br>
          <Typography variant="body1" component="body1">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <p><Link
              href="https://www.behance.net/" 
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
