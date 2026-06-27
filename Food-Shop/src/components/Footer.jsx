import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="news py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-3">Join Our Secret Society</h1>
            <p className="text-white-50 mb-4">Subscribe to receive exclusive deals, organic recipes, and health guides directly in your inbox.</p>
            {subscribed ? (
              <div className="text-success fw-bold py-2">
                <i className="bi bi-check-circle-fill me-2"></i>Successfully Subscribed! Welcome to the society.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex flex-sm-row flex-column gap-2 justify-content-center max-w-500 m-auto">
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="form-control" 
                  placeholder="Enter your Email" 
                  required 
                />
                <button type="submit" className="btn btn-success btn2 rounded-pill px-4">Submit</button>
              </form>
            )}
          </div>
        </div>
        <div className="row pt-4 border-top border-secondary">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="pb-3 fw-bold text-success">CUSTOMER CARE</h5>
            <p className="text-white-50 mb-2">Regular Support</p>
            <p className="text-white-50 mb-2">On Time Delivery</p>
            <p className="text-white-50 mb-0">Always Care Guarantee</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="pb-3 fw-bold text-success">QUICK LINKS</h5>
            <p className="mb-2"><a href="#home" className="text-white-50 text-decoration-none hover-white">Home</a></p>
            <p className="mb-2"><a href="#trending" className="text-white-50 text-decoration-none hover-white">Trending</a></p>
            <p className="mb-2"><a href="#store" className="text-white-50 text-decoration-none hover-white">Store</a></p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="pb-3 fw-bold text-success">CONTACT US</h5>
            <p className="text-white-50 mb-2">Nanjappa Circle, Shanti Nagar</p>
            <p className="text-white-50 mb-2">+91 1234567890</p>
            <p className="text-white-50 mb-0">info@organicfood.com</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="pb-3 fw-bold text-success">FOLLOW US</h5>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-telegram"></i></a>
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-center text-white-50 mb-0">
          Copyright &copy; 2026 Organic Food Shop. All rights reserved. | Designed by rids
        </p>
      </div>
    </section>
  );
};

export default Footer;
