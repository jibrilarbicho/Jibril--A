import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="\">
          {props.id === 4 ? (
            <i className="fas fa-school"></i>
          ) : (
            <i className="fas fa-graduation-cap"></i>
          )}
        </a>
      </div>
    </>
  );
}
