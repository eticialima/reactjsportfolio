import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Animated } from "react-animated-css";
import "./Contatome.css";

function Contatome() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className="bodysobre1">
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <div className="titlehome">
              <h1>** Contato **</h1>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div>
                  <img src="images/home.png" className="imgsobrecard"></img>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h3">
                  Fale Comigo...
                </Typography>
                <hr></hr>
                <br></br>
                <br></br> 
                <Typography variant="h5" component="h2"> 
                Lorem ipsum elementum inceptos donec fames dapibus eleifend porta sapien quis, taciti nec elit sapien aenean habitasse praesent donec. 
                </Typography>
                <br></br>
                <br></br>
                <Grid>
                  <div className="banner-text1">
                    <div className="social-contato">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/leticiarenata/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.instagram.com/eticialima/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.behance.net/eticialima"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-behance" aria-hidden="true" />
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.facebook.com/leticiarenata/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.github.com/eticialima"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.twitter.com/leticialimacgi/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Grid>
                <br></br>
                <br></br>
                <Typography variant="h2" component="h3">
                  Contato Detalhes
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="h5" component="h2">
                  <p>Leticia Lima</p>
                  <p>Rua Amadeu Amaral 140</p>
                  <p>Vila Monteiro, SP</p>
                  <p>+55 16 9 94256485</p>
                  <p>leticialimacgi@gmail.com</p>
                </Typography>
                <br></br>
                <br></br>
              </Grid>
            </Grid>
          </Animated>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Contatome;
