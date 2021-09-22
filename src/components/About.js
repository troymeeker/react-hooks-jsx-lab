import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>A late learner of coding, I have completely shifted careers in order to create a better future for myself and my future family. And loving every day of it!</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
