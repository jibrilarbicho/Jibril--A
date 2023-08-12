import React from "react";
import "./Certificate.css";
import Card from "./Card";
import Certficate_data from "./Certificatedata";
export default function Certficate() {
  return (
    <>
      <section className="Certificates top" id="certificates">
        <div className="container">
          <div className="heading text-center">
            <h4>Visit My Certificates</h4>
            <h1>My Certificates</h1>
          </div>
          <div className="content grid">
            {Certficate_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  desc={value.desc}
                  image={value.image}
                  category={value.category}
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
