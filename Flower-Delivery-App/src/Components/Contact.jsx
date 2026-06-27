import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>contact </span>us</h1>
      <div className="row">
        <form>
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />
          <textarea className="box" placeholder="message" rows="5"></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>
        <div className="image">
          <img src="src\assets\anita-austvika-86IzvpMTF9Y-unsplash (1).jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
