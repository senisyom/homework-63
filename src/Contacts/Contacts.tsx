const Contacts = () => {
    return (
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Company Name</h5>
              <p>123 Main St, Bishkek, Kyrgyzstan</p>
              <p>Email: info@company.com</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}

export default Contacts