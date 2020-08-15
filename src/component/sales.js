import React from 'react';
export const Sale = () => {
    return (
        <section className="offers-sec" style={{background: 'url(images/offers.jpg)no-repeat'}}>
  <div className="cover" />
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="detail">
          <h3>Top 50% OFF on Selected</h3>
          <h6>We are now offering some good discount 
            on selected books go and shop them</h6>
          <a href="products.html" className="btn blue-btn">view all books</a>
          <span className="icon-point percentage">
            <img src="images/precentagae.png" alt="" />
          </span>
        </div>
      </div>
      <div className="col-md-6">
        <div className="detail">
          <h3>Shop $ 500 Above and Get Extra!</h3>
          <h6>We are now offering some good discount 
            on selected books go and shop them</h6>
          <a href="products.html" className="btn blue-btn">view all books</a>
          <span className="icon-point amount"><img src="images/amount.png" alt="" /></span>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}