const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="fas fa-leaf me-2 text-success"></i>Organic
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trending">Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#organic">Organic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#store">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <form className="d-flex align-items-center position-relative">
            <input 
              className="form-control px-4 search" 
              type="search" 
              placeholder="Search products..." 
              aria-label="Search" 
            />
            <button className="btn0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
