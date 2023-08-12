import "./Home.css";
import jibril from "../Head/Photo/ji.png";
export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome</h3>
            <h1>
              Hi i'm <span>Jibril Arbicho</span>
            </h1>
            <p>
              I am a website developer with a fervent passion for creating
              immersive digital experiences. As a software engineer, I am
              engaged in the art of constructing website projects by leveraging
              both frontend and backend technologies. My portfolio stands as a
              testament to my resolute commitment to perpetual learning and
              progress within the dynamic realm of web development.
            </p>
            <div className="hero-btn d-flex">
              <div>
                <a href="CV.pdf" className="cv" target="_blank">
                  Download CV
                </a>
              </div>
              <div className="col-1">
                <h4>Find With Me</h4>
                <div className="button">
                  <button
                    className="btn-shadow"
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/jibril.arbicho.1/",
                        "_blank"
                      );
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    className="btn-shadow"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/jibril-arbicho-5a6a18267/",
                        "_blank"
                      );
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button
                    className="btn-shadow"
                    onClick={() => {
                      window.open(
                        " https://github.com/jibrilarbicho",
                        "_blank"
                      );
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={jibril} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
