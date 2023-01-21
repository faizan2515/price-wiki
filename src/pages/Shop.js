import React from "react";
import products from "../data/products";

function Shop() {
  return (
    <div className="container py-4 mb-2 mb-sm-0 pb-sm-5">
      <div className="d-flex justify-content-between align-items-center py-3 mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <select className="form-select me-2" style={{ width: "15.25rem" }}>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="newness">Sort by newness</option>
            <option value="price: low to high">
              Sort by price: low to high
            </option>
            <option value="price: high to low">
              Sort by price: high to low
            </option>
          </select>
          <div className="d-none d-sm-block fs-sm text-nowrap ps-1 mb-1">
            of 135 products
          </div>
        </div>
        <div className="d-none d-lg-flex justify-content-center align-items-center">
          <label className="pe-1 me-2 mb-0 form-label px-0">Show</label>
          <select className="form-select me-2" style={{ width: "5rem" }}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </select>
          <div className="fs-sm text-nowrap ps-1 mb-1">products per page</div>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter"
          >
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src={product.image} alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  {product.category}
                </button>
                <h3 className="fs-md mb-2">
                  <button className="fw-medium border-0 bg-transparent meta-link">
                    {product.title}
                  </button>
                </h3>
                <span className="text-heading fw-semibold">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
