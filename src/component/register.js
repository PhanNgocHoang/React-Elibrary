import React from 'react';
export const Register = () =>{
    return(
        <div>
  <div className="breadcrumb">
    <div className="container">
      <a className="breadcrumb-item" href="index.html">Home</a>
      <span className="breadcrumb-item active">Register</span>
    </div>
  </div>
  <section className="static about-sec">
    <div className="container">
      <h1>My Account / REgister</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
      <div className="form">
        <form>
          <div className="row">
            <div className="col-md-4">
              <input placeholder="Enter User Name" required />
              <span className="required-star">*</span>
            </div>
            <div className="col-md-4">
              <input type="email" placeholder="Password" required />
              <span className="required-star">*</span>
            </div>
            <div className="col-md-4">
              <input type="email" placeholder="Repeat Password" required />
              <span className="required-star">*</span>
            </div>
            <div className="col-lg-8 col-md-12">
              <button className="btn black">Register</button>
              <h5>not Registered? <a href="login.html">Login here</a></h5>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

    )
}