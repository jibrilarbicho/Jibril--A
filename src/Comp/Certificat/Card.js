import React, { useState } from "react";

export default function Card(props) {
  const [modal, setModal] = useState(false);
  const list = props.desc;
  const images = props.image;

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="p-6">
      <div className="box btn_shadow ">
        <div className="img">
          <img src={images[0]} alt="" onClick={toggleModal} />
          <img src={images[1]} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left mb-3">
              <img src={images[0]} alt="im1" />
              <img src={images[1]} alt="im2" className="mb-3" />{" "}
              <a
                href={props.link}
                className="text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
            <div className="modal-text right">
              <h1>{props.title}</h1>
              <ul className="circle-list">
                {list.map((al, index) => (
                  <li key={index} className="cirle-li">
                    {" "}
                    {al}{" "}
                  </li>
                ))}
              </ul>

              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
