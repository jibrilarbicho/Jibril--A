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
            <h1>Get in Touch</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src={me} alt="Jibril Arbicho" />
                </div>
                <div className="details">
                  <h1>Jibril Arbicho</h1>
                  <p>Software Engineer | Machine Learning Engineer</p>
                  <p>
                    I am open to freelance opportunities. Feel free to reach out
                    to discuss your project requirements or collaborations.
                  </p>
                  <br />
                  <p>
                    Email:{" "}
                    <a href="mailto:jibrilarbicho2@gmail.com">
                      jibrilarbicho2@gmail.com
                    </a>
                  </p>
                  <br />
                  <span>Connect with Me</span>
                  <div className="button f_flex">
                    {/* LinkedIn */}
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/jibril-a-299505297/",
                          "_blank"
                        )
                      }
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>

                    {/* LeetCode */}
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        window.open(
                          "https://leetcode.com/u/jibril_arbicho/",
                          "_blank"
                        )
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease", // Smooth transition for hover effect
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#1d4ed8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                        alt="LeetCode"
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                      />
                    </button>

                    {/* Email */}
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        window.open("mailto:jibrilarbicho2@gmail.com", "_blank")
                      }
                    >
                      <i className="fas fa-envelope"></i>
                    </button>

                    {/* Twitter */}
                    <button
                      className="btn_shadow"
                      onClick={() =>
                        window.open(
                          "https://twitter.com/JArbicho68623",
                          "_blank"
                        )
                      }
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
