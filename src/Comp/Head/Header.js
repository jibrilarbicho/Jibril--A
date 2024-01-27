import "./Header.css";
import { useState } from "react";
import myphoto from "../Head/Photo/jia.png";
export default function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <div className="image-text-container">
              <img src={myphoto} alt={<h3>JibrilA</h3>} />
              <span>
                <h2>Jibril A </h2>
              </span>
            </div>
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#About">About</a>
              </li>

              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn "></i>
              ) : (
                <i className="fas fa-bars open "></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
