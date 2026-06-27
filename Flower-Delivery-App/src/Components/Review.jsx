import React from 'react';

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">customer's <span>review</span></h1>
      <div className="box-container">
        {[
          { name: 'john deo', image: 'src\assets\download (1).jpg' },
          { name: 'Ebrahim', image: 'src\assets\download (2).jpg' },
          { name: 'Emily', image: 'src\assets\download (3).jpg' }
        ].map((user, i) => (
          <div className="box" key={i}>
            <div className="stars">
              {[...Array(5)].map((_, idx) => (
                <i className="fas fa-star" key={idx}></i>
              ))}
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            <div className="user">
              <img src={`/img/${user.image}`} alt="" />
              <div className="user-info">
                <h3>{user.name}</h3>
                <span>happy customer</span>
              </div>
            </div>
            <span className="fas fa-quote-right"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
