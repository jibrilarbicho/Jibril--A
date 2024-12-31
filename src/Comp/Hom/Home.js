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
            <p className="mb-10">
              I am a website developer with a fervent passion for creating
              immersive digital experiences. As a software engineer, I am
              engaged in the art of constructing website projects by leveraging
              both frontend and backend technologies. My portfolio stands as a
              testament to my resolute commitment to perpetual learning and
              progress within the dynamic realm of web development.
            </p>
            <div className="hero-btn d-flex mt-5">
              <div>
                <a href="/JibrilArbichoRes.pdf" className="cv" target="_blank">
                  Download CV
                </a>
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
