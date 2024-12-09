import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faGoogle, 
  faInstagram, 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faGem, 
  faHome, 
  faEnvelope, 
  faPhone, 
  faPrint 
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-muted bg-body-tertiary p-2">
      <section className="d-flex justify-content-center p-2 border-bottom">
        <div className="me-3 d-none d-lg-block">
          <span>Connect with us:</span>
        </div>
        <div>
          <a href="#!" className="me-3 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#!" className="me-3 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#!" className="me-3 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#!" className="me-3 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#!" className="me-3 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#!" className="me-3 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className="container text-center text-md-start mt-2">
        <div className="row mt-1">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-2">
              <FontAwesomeIcon icon={faGem} className="me-2" /> Company
            </h6>
            <p className="small">
              Organize your footer content. Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-2">Products</h6>
            <p className="small"><a href="#!" className="text-reset">Angular</a></p>
            <p className="small"><a href="#!" className="text-reset">React</a></p>
            <p className="small"><a href="#!" className="text-reset">Vue</a></p>
            <p className="small"><a href="#!" className="text-reset">Laravel</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-2">Links</h6>
            <p className="small"><a href="#!" className="text-reset">Pricing</a></p>
            <p className="small"><a href="#!" className="text-reset">Settings</a></p>
            <p className="small"><a href="#!" className="text-reset">Orders</a></p>
            <p className="small"><a href="#!" className="text-reset">Help</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
            <p className="small"><FontAwesomeIcon icon={faHome} className="me-2" /> New York, NY</p>
            <p className="small"><FontAwesomeIcon icon={faEnvelope} className="me-2" /> info@example.com</p>
            <p className="small"><FontAwesomeIcon icon={faPhone} className="me-2" /> +01 234 567 88</p>
            <p className="small"><FontAwesomeIcon icon={faPrint} className="me-2" /> +01 234 567 89</p>
          </div>
        </div>
      </section>

      <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontSize: 'small' }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
