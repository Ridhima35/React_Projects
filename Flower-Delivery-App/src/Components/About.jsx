import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us</h1>
      <div className="row">
        <div className="video-container">
          <video src="src\assets\3127085-hd_1280_720_24fps.mp4" loop autoPlay muted></video>
          <h3>best flower sellers</h3>
        </div>
        <div className="content">
          <h3>why choose us</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          <a href="#" className="btn">learn more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
