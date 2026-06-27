import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact py-5 bg-white" id="contact">
      <div className="container py-4">
        <div className="row mb-5">
          <div className="col-lg-5 m-auto text-center">
            <span className="text-success fw-bold uppercase-tracking">Get In Touch</span>
            <h1 className="fw-bold mt-2">Contact Us</h1>
            <h6 className="text-danger fw-semibold">Always Be In Touch With Us</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="row contact-card g-5">
              <div className="col-lg-4">
                <div className="contact-info-block d-flex flex-column justify-content-center">
                  <div className="mb-4">
                    <h6 className="text-success mb-1">
                      <i className="bi bi-geo-alt-fill me-2"></i>LOCATION
                    </h6>
                    <p className="text-muted mb-0">Nanjappa Circle, Shanti Nagar</p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-success mb-1">
                      <i className="bi bi-telephone-fill me-2"></i>PHONE
                    </h6>
                    <p className="text-muted mb-0">+91 1234567890</p>
                  </div>

                  <div>
                    <h6 className="text-success mb-1">
                      <i className="bi bi-envelope-fill me-2"></i>EMAIL
                    </h6>
                    <p className="text-muted mb-0">didab96335@claspira.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                {submitted ? (
                  <div className="alert alert-success py-4 rounded-4 shadow-sm" role="alert">
                    <h5 className="alert-heading fw-bold">Message Sent Successfully!</h5>
                    <p className="mb-0">Thank you for reaching out, {formData.firstName}. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="contact-form">
                    <div className="row g-3">
                      <div className="col-lg-6">
                        <input 
                          type="text" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleInputChange} 
                          className="form-control bg-light border-0" 
                          placeholder="First Name" 
                          required 
                        />
                      </div>
                      <div className="col-lg-6">
                        <input 
                          type="text" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleInputChange} 
                          className="form-control bg-light border-0" 
                          placeholder="Last Name" 
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 py-3">
                        <textarea 
                          name="message" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          className="form-control bg-light border-0" 
                          placeholder="Enter your message" 
                          cols="10" 
                          rows="5" 
                          required
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn1">Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
