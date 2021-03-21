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

function Tcc2020() {
  const classes = useStyles();
  return (
    <>
      <div className="hero-container1"></div>
      <div className="rowbody">
        <div className={classes.root}>
          <Animated
            animationIn="zoomIn"
            animationOut="fadeOut"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <Grid container spacing={3}>
              <div className="titlehome">
                <h1>
                  ** Sistema de Controle de Acesso por Reconhecimento Facial **
                </h1>
              </div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                item
                xs={12}
              >
                <br></br>
                <hr></hr>
                <br></br>
                <Typography variant="h3" component="h3">
                  Missão do projeto
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="body1" component="body1">
                  A missão do projeto objetiva desenvolver um sistema de baixo
                  custo automatizado para controle de acesso utilizando
                  reconhecimento facial. Como parâmetro de entrada, o sistema
                  recebe uma imagem de um funcionário capturada via webcam
                  retornando como saída uma resposta do reconhecimento das faces
                  previamente cadastradas no banco de dados. O sistema consiste
                  em três partes: detecção facial, extração de características e
                  reconhecimento. A detecção facial foi implementada usando-se o
                  algoritmo de Rede Neural Convolucional, que tem como base o
                  aprendizado profundo que pode captar uma imagem de entrada e
                  atribuir importâncias como pesos e vieses a vários aspectos
                  para a extração. Além disso, foi utilizado os conceitos de
                  Deep Learning, que junto com a função ConvNet é capaz de
                  reduzir as imagens extraídas para uma forma mais fácil de
                  processar o treinamento, sem perder qualidade e boa previsão.
                </Typography>
              </Grid>
              <Grid container spacing={3}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                >
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Typography variant="h3" component="h3">
                    Protótipo Funcionando
                  </Typography>
                  <br></br>
                  <Typography variant="body1" component="body1">
                    Para o reconhecimento de faces foi desenvolvido um código
                    que realiza o processamento de extração das faces através de
                    uma câmera digital. O método utilizado é baseado na
                    identificação dos atributos faciais do usuário. Foi
                    utilizado Rede Neural pela facilidade que a rede tem de
                    receber informações e compará-las com outras informações em
                    um tempo muito curto. Nesse vídeo mostro para vocês o
                    protótipo funcionamento no PC.
                  </Typography>
                  <br></br>
                  <Link
                    href="https://github.com/eticialima/recognitionpythonraspberry"
                    target="blank"
                  >
                    https://github.com/eticialima/recognitionpythonraspberry
                </Link>
                  <br></br>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      width="100%"
                      height="100%"
                      controls={true}
                      url="https://www.youtube.com/watch?v=La1eupi8suQ"
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                item
                xs={12}
              >
                <hr></hr>
                <br></br>
                <br></br>
                <Typography variant="h3" component="h3">
                  Diagrama Fluxo dos dados
                </Typography>
                <br></br>
                <br></br>
                <Typography variant="body1" component="body1">
                  A figura a baixo expõe claramente um exemplo de controle de
                  acesso. Para isso foi utilizado o algoritmo Python e
                  biblioteca Kivy para criar a interface onde será feito o
                  cadastro das pessoas, fazendo assim a extração das
                  características faciais e enviando as imagens capturadas para
                  uma unidade central com um banco de dados, nesse caso SQLite.
                  Foi desenvolvido um código que atua dentro do Raspberry Pi que
                  é responsável por fazer o treinamento dos rosto das
                  informações que foram cadastradas. Após o treinamento o
                  usuário cadastrado esta pronto para fazer o reconhecimento. A
                  câmera é configurada utilizando os conceitos das bibliotecas
                  do OpenCV, então a mesma esta sempre em modo ativo. Como
                  exemplo foi utilizado um terminal com display, micro
                  controlador e câmera, o usuário vai se aproximar da câmera e o
                  reconhecimento será feito. Se o reconhecimento positivo vai
                  aparecer as informações na tela do usuário.
                </Typography>
                <br></br>
                <CardItem src="images/tcc1.jpg" />

                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
              </Grid>
              <Grid item xs={12}>
                <br></br>
                <br></br>
                <Typography variant="h3" component="h3">
                  Equipamentos Utilizados
                </Typography>
                <br></br>
                <Typography variant="body1" component="body1">
                  Para a ideia do projeto não tínhamos um mega terminal. Então
                  adaptamos um modelo um pouco diferente. foi utilizado um
                  suporte do Ipad com teclado e adaptamos um display de 7
                  polegadas. atrás do Ipad adaptamos um suporte para colocar a
                  câmera e o Raspberry Pi 4.
                </Typography>
                <br></br>
                <br></br>
                <CardItem src="images/tcc2.jpg" />
                <CardItem src="images/tcc3.jpg" />
              </Grid>
              <Grid alignItems="center" item xs={12}>
                <br></br>
                <br></br>
                <Typography variant="h3" component="h3">
                  Projeto Fase 1
                </Typography>
                <br></br>
                <br></br>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    controls={true}
                    url="https://www.youtube.com/watch?v=zpwCSu8Yfsk"
                  />
                </div>
                <br></br>
                <br></br>
                <Typography variant="body1" component="body1">
                  Esse vídeo foi os primeiros testes no PC para dar inicio no
                  protótipo. Verificamos principalmente a parte da interface se
                  tem suporte com as bibliotecas de reconhecimento facial. então
                  foi montado um modelo em Python com biblioteca Kivy. E
                  utilizamos um código{" "}
                  <Link
                    href="https://www.youtube.com/watch?v=jqSRzuCAwhY"
                    target="blank"
                  >
                    [Hindi] Part-1 Facial Recognition System Using Opencv
                    |OpenCV|Python|2018
                  </Link>{" "}
                  apenas para teste, e obtivemos um resultado muito bom. E
                  começamos a desenvolver.
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <iframe
                  src="https://drive.google.com/file/d/1zM7HPVgyKlBDQq5DNYJsBpPuI05BTJIL/preview"
                  width="100%"
                  height="480"
                ></iframe>
                <br></br>
              </Grid>
            </Grid>
          </Animated>
        </div>
      </div>

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
            <a href="/Portfolio">
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

export default Tcc2020;
