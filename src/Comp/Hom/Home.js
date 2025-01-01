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
              I am a Full-Stack Developer proficient in the MERN stack and
              Django, with expertise in building immersive digital experiences
              by integrating both frontend and backend technologies.
              Additionally, I am a Machine Learning Engineer skilled in
              frameworks such as PyTorch, TensorFlow, and LangChain,
              specializing in developing intelligent solutions. My portfolio
              reflects a deep passion for innovation, perpetual learning, and
              growth in the dynamic fields of web development and machine
              learning.
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
