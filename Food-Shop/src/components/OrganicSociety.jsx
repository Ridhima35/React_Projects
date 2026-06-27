import soc1 from '../assets/images/society1.jpg';
import soc2 from '../assets/images/society2.jpg';
import soc3 from '../assets/images/society3.jpg';

const OrganicSociety = () => {
  const societies = [
    {
      id: 1,
      title: 'Best Quality Product',
      img: soc1,
      desc: 'We strictly verify farms to guarantee all organic produce meets world-class chemical-free specifications.'
    },
    {
      id: 2,
      title: 'Organic Society Farming',
      img: soc2,
      desc: 'Collaborating directly with rural farmers to support organic eco-farming techniques and zero fertilizers.'
    },
    {
      id: 3,
      title: 'Eco-Healthy Delivery',
      img: soc3,
      desc: 'All packaging is biodegradable and delivered fast to preserve raw freshness and health values.'
    }
  ];

  return (
    <section className="about py-5" id="organic">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-success fw-bold uppercase-tracking">Our Roots</span>
          <h1 className="fw-bold mt-2">Welcome to our organic society</h1>
          <h6 className="text-danger fw-semibold">Be Healthy Organic Society</h6>
        </div>
        <div className="row g-4 justify-content-center">
          {societies.map((soc) => (
            <div key={soc.id} className="col-lg-4 col-md-6">
              <div className="about-card text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="about-img-container">
                    <img src={soc.img} alt={soc.title} />
                  </div>
                  <h5 className="fw-bold mb-3 text-success">{soc.title}</h5>
                  <p className="text-muted px-2 small">{soc.desc}</p>
                </div>
                <div className="mt-3">
                  <button className="btn btn-link text-success fw-bold text-decoration-none p-0">
                    Read More <i className="fas fa-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <button className="btn1">Shop More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicSociety;
