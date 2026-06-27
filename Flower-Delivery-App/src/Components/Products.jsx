import React from 'react';

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">latest <span>products</span></h1>
      <div className="box-container">
        {[...Array(8)].map((_, i) => (
          <div className="box" key={i}>
            <span className="discount">-{(i + 1) * 2}%</span>
            <div className="image">
              <img src={`/img/product${i + 1}.webp`} alt="" />
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="card-btn">add to cart</a>
                <a href="#" className="fas fa-share"></a>
              </div>
            </div>
            <div className="content">
              <h3>flower pot</h3>
              <div className="price">₹1000<span> ₹1400</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
