import React from 'react';
export const Footer = () =>{
    return (
        <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="address">
          <h4>Our Address</h4>
          <h6>The BookStore Theme, 4th Store
            Beside that building, USA</h6>
          <h6>Call : 800 1234 5678</h6>
          <h6>Email : info@bookstore.com</h6>
        </div>
        <div className="timing">
          <h4>Timing</h4>
          <h6>Mon - Fri: 7am - 10pm</h6>
          <h6>​​Saturday: 8am - 10pm</h6>
          <h6>​Sunday: 8am - 11pm</h6>
        </div>
      </div>
      <div className="col-md-3">
        <div className="navigation">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms-conditions.html">Terms</a></li>
            <li><a href="products.html">Products</a></li>
          </ul>
        </div>
        <div className="navigation">
          <h4>Help</h4>
          <ul>
            <li><a href>Shipping &amp; Returns</a></li>
            <li><a href="privacy-policy.html">Privacy</a></li>
            <li><a href="faq.html">FAQ’s</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-5">
        <div className="form">
          <h3>Quick Contact us</h3>
          <h6>We are now offering some good discount 
            on selected books go and shop them</h6>
          <form>
            <div className="row">
              <div className="col-md-6">
                <input placeholder="Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="col-md-12">
                <textarea placeholder="Messege" defaultValue={""} />
              </div>
              <div className="col-md-12">
                <button className="btn black">Alright, Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}