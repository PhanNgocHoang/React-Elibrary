import React from 'react';
export const Login = () => {
    return (
    <div>
  <div className="breadcrumb">
    <div className="container">
      <a className="breadcrumb-item" href="index.html">Home</a>
      <span className="breadcrumb-item active">Login</span>
    </div>
  </div>
  <section className="static about-sec">
    <div className="container">
      <h1>My Account / Login</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
      <div className="form">
        <form>
          <div className="row">
            <div className="col-md-5">
              <input placeholder="Enter User Name" required />
              <span className="required-star">*</span>
            </div>
            <div className="col-md-5">
              <input type="email" placeholder="Enter Email Address" required />
              <span className="required-star">*</span>
            </div>
            <div className="col-lg-8 col-md-12">
              <button className="btn black">Login</button>
              <h5>not Registered? <a href="register.html">REgister here</a></h5>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

    )
}