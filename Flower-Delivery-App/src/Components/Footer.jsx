import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">contact</a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#">my account</a>
          <a href="#">my order</a>
        </div>

        <div className="box">
          <h3>locations</h3>
          <a href="#">india</a>
          <a href="#">france</a>
          <a href="#">usa</a>
          <a href="#">japan</a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">+123-456-7890</a>
          <a href="#">example@gmail.com</a>
          <a href="#">mumbai, india-400104</a>
          <img src="/img/images (3).png" alt="" />
        </div>
      </div>
      <div className="credit">
        created by <span>ms. rids</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
