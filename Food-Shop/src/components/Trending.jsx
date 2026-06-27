import quinoaImg from '../assets/images/quinoa.jpg';
import vadaImg from '../assets/images/vada.jpg';
import gheeImg from '../assets/images/ghee.jpg';
import ricecakeImg from '../assets/images/ricecake.jpg';

const Trending = () => {
  const trendingProducts = [
    {
      id: 1,
      name: 'Organic India Quinoa',
      price: '₹ 250',
      imgSrc: quinoaImg,
    },
    {
      id: 2,
      name: 'Organic Tattva Organic Vada',
      price: '₹ 230',
      imgSrc: vadaImg,
    },
    {
      id: 3,
      name: 'Organic India Cow Ghee',
      price: '₹ 639',
      imgSrc: gheeImg,
    },
    {
      id: 4,
      name: 'Pintola Organic Wholegrain Rice Cake',
      price: '₹ 139',
      imgSrc: ricecakeImg,
    },
  ];

  return (
    <section className="product py-5 bg-light" id="trending">
      <div className="container py-4">
        <div className="row mb-5">
          <div className="col-lg-6 m-auto text-center">
            <span className="text-success fw-bold uppercase-tracking">Hot Picks</span>
            <h1 className="fw-bold mt-2">What's Trending</h1>
            <h6 className="text-danger fw-semibold">Be Healthy Organic Food</h6>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {trendingProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <div className="product-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="product-img-wrapper">
                    <img src={product.imgSrc} className="img-fluid" alt={product.name} />
                  </div>
                  <div className="p-4 text-center">
                    <h6>{product.name}</h6>
                    <div className="text-warning mb-2">
                      <i className="fas fa-star small"></i>
                      <i className="fas fa-star small"></i>
                      <i className="fas fa-star small"></i>
                      <i className="fas fa-star small"></i>
                      <i className="fas fa-star-half-alt small"></i>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 text-center">
                  <p className="mb-3">{product.price}</p>
                  <button className="btn btn-success btn-sm rounded-pill w-100 py-2 fw-bold">
                    <i className="fas fa-shopping-basket me-2"></i>Add To Basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <button className="btn1">Click for more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
