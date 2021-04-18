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
        <h1>** Lorem Ipsum **</h1>
        <div className="cards__container">
          <div className="cards__wrapper"> 
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem Ipsum is simply dummy text '
              label='HTML/CSS/JS' 
            />
             <CardItem
                src="images/img-1.jpg"
                text="Lorem Ipsum is simply dummy text "
                label="PythonCRUD"
                path="/Pythoncrud"
              /> 
            </ul>  
            <ul className="cards__items"> 
            <CardItem
                src="images/img-2.jpg"
                text="Lorem Ipsum is simply dummy text "
                label="ReactJS" 
              />
              <CardItem
                src="images/img-2.jpg"
                text="Lorem Ipsum is simply dummy text "
                label="HTML/CSS/JS" 
              />
            </ul> 
            <ul className="cards__items">
              <CardItem
                src="images/img-3.png"
                text="Lorem Ipsum is simply dummy text "
                label="tcc2020" 
              />
            </ul>
          </div>
        </div>
      </div>
    </Animated>
  );
}

export default Cards;
