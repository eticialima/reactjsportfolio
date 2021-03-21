import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Animated } from "react-animated-css";

function Cards() {
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <div className="cards">
        <h1>** Projetos **</h1>
        <div className="cards__container">
          <div className="cards__wrapper"> 
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Site Portfolio em HTML/CSS/JS'
              label='HTML/CSS/JS'
              path='/PortifolioHTMLCSSJS'
            />
             <CardItem
                src="images/img-1.jpg"
                text="Projetos em python com CRUD. OpenCV"
                label="PythonCRUD"
                path="/Pythoncrud"
              /> 
            </ul>  
            <ul className="cards__items"> 
            <CardItem
                src="images/img-2.jpg"
                text="Site Portfolio em ReactJS"
                label="ReactJS"
                path="/PortifolioReactJS"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Web Designer, formularios, login e senha e visual"
                label="HTML/CSS/JS"
                path="/Html1"
              />
            </ul> 
            <ul className="cards__items">
              <CardItem
                src="images/img-3.png"
                text="Sistema de Controle de acesso por Reconhecimento Facial"
                label="tcc2020"
                path="/Tcc2020"
              />
            </ul>
          </div>
        </div>
      </div>
    </Animated>
  );
}

export default Cards;
