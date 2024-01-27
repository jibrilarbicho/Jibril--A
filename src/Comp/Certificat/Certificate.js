import React from "react";
import "./Certificate.css";
import Card from "./Card";
import Certficate_data from "./Certificatedata";
export default function Certficate() {
  return (
    <>
      <section className="Certificates top" id="projects">
        <div className="container">
          <div className="heading text-center">
            <h4>
              Here you will find some of the personal projects that I created.
            </h4>
            <h1>Projects</h1>
          </div>
          <div className="content grid">
            {Certficate_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  desc={value.desc.split(";")}
                  image={value.image.split(";")}
                  link={value.link}
                  title={value.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
