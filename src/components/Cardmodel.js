import React from "react";
import { Link } from "react-router-dom";

function Cardmodel(props) {
  return (
    <>
      <li className="modelcards__item">
        <Link className="modelcards__item__link" to={props.path}>
          <figure
            className="modelcards__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="modelcards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div>
            <h5 className="modelcards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Cardmodel;
