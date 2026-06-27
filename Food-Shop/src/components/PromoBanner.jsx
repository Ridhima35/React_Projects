import bannerImg from '../assets/images/banner.jpg';

const PromoBanner = () => {
  return (
    <section 
      className="apple py-5 my-5 container" 
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="apple-overlay"></div>
      <div className="container py-5 apple-content">
        <div className="row py-4 justify-content-start">
          <div className="col-lg-7 text-white text-lg-start text-center ps-lg-5">
            <h1 className="font-weight-bold py-3 display-4">
              Unlock your Potential With Good Nutrition
            </h1>
            <h5 className="text-light-green mb-4">Always Get Good Food</h5>
            <button className="btn1 mt-2">More From Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
