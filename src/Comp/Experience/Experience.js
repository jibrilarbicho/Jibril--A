import React from "react";
import "./Experience.css";
import data from "./Experiencedata";
import Card from "./Card";
export default function Experience() {
  return (
    <>
      <section className="experiences top" id="experience">
        <div className="container">
          <div className="heading text-center">
            <h4>Experiences</h4>
            <h1>My Experiences</h1>
          </div>

          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  id={val.id}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
