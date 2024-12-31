import React from "react";
import logo1 from "./Head/Photo/jia.png";

export default function Footer() {
  return (
    <>
      <footer>
        <hr />
        <div className="container text-center top">
          <div className="img footer">
            <img src={logo1} alt="" />
          </div>
          <p>&copy; 2024. All rights reserved by Jibril Arbicho.</p>
        </div>
      </footer>
    </>
  );
}
