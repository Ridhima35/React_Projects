import quinoaImg from '../assets/images/quinoa.jpg';
import vadaImg from '../assets/images/vada.jpg';
import gheeImg from '../assets/images/ghee.jpg';
import ricecakeImg from '../assets/images/ricecake.jpg';

const Store = () => {
  const storeItems = [
    { id: 1, name: 'Organic India Quinoa', price: '₹ 250', img: quinoaImg, rating: 5 },
    { id: 2, name: 'Organic Tattva Organic Vada', price: '₹ 230', img: vadaImg, rating: 4 },
    { id: 3, name: 'Organic India Cow Ghee', price: '₹ 639', img: gheeImg, rating: 5 },
    { id: 4, name: 'Pintola Organic Rice Cake', price: '₹ 139', img: ricecakeImg, rating: 4 },
    { id: 5, name: 'Premium Quinoa Cereal', price: '₹ 320', img: quinoaImg, rating: 5 },
    { id: 6, name: 'Organic Oats Mix', price: '₹ 190', img: vadaImg, rating: 4 },
    { id: 7, name: 'Pure Desi Ghee', price: '₹ 700', img: gheeImg, rating: 5 },
    { id: 8, name: 'Multigrain Rice Cakes', price: '₹ 160', img: ricecakeImg, rating: 4 }
  ];

  return (
    <section className="shop py-5 bg-white" id="store">
      <div className="container py-4">
        <div className="row mb-5">
          <div className="col-lg-8 m-auto text-center">
            <span className="text-success fw-bold uppercase-tracking">Explore Catalog</span>
            <h1 className="fw-bold mt-2">Explore Our Store</h1>
            <h6 className="text-danger fw-semibold">Pick Your Product From Our Store</h6>
          </div>
        </div>
        <div className="row g-4">
          {storeItems.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <div className="product-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="product-img-wrapper">
                    <img src={product.img} className="img-fluid" alt={product.name} />
                  </div>
                  <div className="p-4 text-center">
                    <h6>{product.name}</h6>
                    <div className="text-warning mb-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i 
                          key={index} 
                          className={`fas fa-star small ${index < product.rating ? 'text-warning' : 'text-muted'}`}
                        ></i>
                      ))}
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
      </div>
    </section>
  );
};

export default Store;
