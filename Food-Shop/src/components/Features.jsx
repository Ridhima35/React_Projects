import naturalImg from '../assets/images/natural.jpg';
import organicImg from '../assets/images/organic.jpg';
import healthyImg from '../assets/images/healthy.jpg';

const Features = () => {
  return (
    <section className="new py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row g-4 text-center justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="feature-badge d-flex flex-column align-items-center">
                  <img src={naturalImg} alt="Natural Products" />
                  <h5 className="fw-bold mt-2">NATURAL</h5>
                  <p className="text-muted small px-3">
                    Pure ingredients grown without GMOs or chemicals.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-badge d-flex flex-column align-items-center">
                  <img src={organicImg} alt="Organic Products" />
                  <h5 className="fw-bold mt-2">ORGANIC</h5>
                  <p className="text-muted small px-3">
                    100% certified organic foods harvested at peak freshness.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="feature-badge d-flex flex-column align-items-center">
                  <img src={healthyImg} alt="Healthy Lifestyle" />
                  <h5 className="fw-bold mt-2">HEALTHY</h5>
                  <p className="text-muted small px-3">
                    Nutrient-rich snacks to fuel your body with clean energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
