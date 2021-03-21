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
              <h1>** Sobre Mim **</h1>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div>
                  <img src="images/home.png" className="imgsobrecard"></img>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h3">
                  Letícia Lima
                </Typography>
                <hr></hr>
                <br></br>
                <Typography variant="h5" component="h2">
                  Olá! Meu nome é Letícia Lima. Atualmente atuo como Analista de
                  TI e trabalho como freelancer em projetos de modelagem e audio
                  visual.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2">
                  Formada em computação com foco em programação e sistemas.
                  Tenho visão abrangente e sólida de algumas ferramentas e
                  conceitos. Sou apaixonada pelo mundo digital.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2">
                  Procuro inspiração nos meus clientes e no mundo tecnológico
                  que me rodeia.
                </Typography>
                <br></br>
                <Typography variant="h5" component="h2">
                  Venha conhecer um pouco do meu trajeto profissional.
                </Typography>
                <br></br>
                <Button size="large" variant="outlined" href="https://drive.google.com/file/d/1jB4g_Smvb4JBNf1fPnf_iROsMcRC9pEH/view?usp=sharing" target="blank">DOWNLOAD_CV</Button>
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
                  Skills
                </Typography>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** HTML/CSS/Bootstrap **
                  </Typography>
                  <Progress done="80" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** JS **
                  </Typography>
                  <Progress done="75" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Python/Kivy/MD **
                  </Typography>
                  <Progress done="60" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** Django **
                  </Typography>
                  <Progress done="55" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** SQLServer **
                  </Typography>
                  <Progress done="50" />
                </div>
                <div className=" bodysobre ">
                  <Typography variant="h5" component="h4">
                    ** ReactJS/Bootstrap/UI **
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
