import React from "react";

function Products({ title, loading, products, pagination, handlePagination }) {
  return (
    <section className="container pt-5">
      <h2 className="text-center mb-5">{title} Products</h2>
      <div
        className={`row pagination-min-height ${
          loading && "justify-content-center align-items-center"
        } pb-1`}
      >
        {loading ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter"
            >
              <div
                className="card card-product card-hover overflow-hidden"
                style={{
                  width: 240,
                  height: 300,
                }}
              >
                <a
                  className="border-0 bg-transparent card-img-top h-100 p-2"
                  href={product.product_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={product.product_image_src}
                    alt="Product thumbnail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </a>
                <div className="card-body">
                  <p className="border-0 bg-transparent meta-link fs-xs mb-1 text-truncate">
                    {product.product_brand}
                  </p>
                  <h3
                    className="fs-md mb-2 text-truncate"
                    style={{
                      height: 19.5,
                    }}
                  >
                    <a
                      className="fw-medium border-0 bg-transparent meta-link"
                      href={product.product_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.product_title}
                    </a>
                  </h3>
                  {product.product_price_old !== "null" && (
                    <del className="fs-sm text-muted me-1 text-truncate">
                      {product.product_price_old}
                    </del>
                  )}
                  <span className="text-heading fw-semibold text-truncate">
                    {product.product_price}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="d-md-flex justify-content-end align-items-center pt-3 pb-2">
        <nav className="mb-4">
          <ul className="pagination overflow-auto">
            {pagination.map((page, index) => {
              if (page.label === "&laquo; Previous")
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        handlePagination(page.url);
                      }}
                    >
                      <i className="ai-chevron-left"></i>
                    </button>
                  </li>
                );

              if (page.label === "Next &raquo;")
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        handlePagination(page.url);
                      }}
                    >
                      <i className="ai-chevron-right"></i>
                    </button>
                  </li>
                );

              return (
                <li
                  key={index}
                  className={`page-item ${page.active && "active"}`}
                >
                  <button
                    className="page-link"
                    onClick={() => {
                      handlePagination(page.url);
                    }}
                  >
                    {page.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Products;
