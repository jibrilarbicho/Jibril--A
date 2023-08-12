import React from "react";
import me from "../Head/Photo/jia.png";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow ">
                <div className="img">
                  <img src={me} alt="" />
                </div>
                <div className="details">
                  <h1>Jibril Arbicho</h1>
                  <p>Software Engineering student at Jimma University</p>
                  <p>
                    I am available for freelance work. Connect with me via and
                    call in to my account.
                  </p>{" "}
                  <br />
                  <p>Phone: +251934044223</p>
                  <p>Email: jibrilarbicho2@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i
                        className="fab fa-facebook-f"
                        onClick={() => {
                          window.open(
                            "https://www.facebook.com/jibril.arbicho.1/",
                            "_blank"
                          );
                        }}
                      ></i>
                    </button>
                    <button
                      className="btn_shadow"
                      onClick={() => {
                        window.open(
                          "mailto:jibrilarbicho2@gmail.com",
                          "_blank"
                        );
                      }}
                    >
                      <i class="fas fa-envelope"></i>
                    </button>
                    <button
                      className="btn_shadow"
                      onClick={() => {
                        window.open(
                          "https://twitter.com/JArbicho83669",
                          "_blank"
                        );
                      }}
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
