import { useApp } from "../withAppProvider";

function Compare() {
  const { compareProducts } = useApp();
  return (
    <section className="container pt-5">
      <h2 className="text-center mb-5">Compare Products</h2>
      <div className="row pb-1">
        {compareProducts.length > 0 ? (
          compareProducts.map((product, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter"
            >
              <div
                className="card card-product card-hover overflow-hidden"
                // style={{
                //   width: 240,
                //   height: 300,
                // }}
              >
                {product.product_discount !== "null" && (
                  <span className="badge badge-floating rounded-pill bg-danger">
                    {product.product_discount}
                  </span>
                )}
                <a
                  className="border-0 bg-transparent card-img-top h-100 p-2"
                  href={product.product_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 240,
                    height: 300,
                  }}
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
                  {product.category !== "null" && (
                    <p className="border-0 bg-transparent meta-link fs-xs mb-1 text-truncate">
                      {product.category}
                    </p>
                  )}
                  <h3
                    className="fs-md mb-2 text-start"
                    // style={{
                    //   height: 19.5,
                    // }}
                  >
                    <span>Title: </span>
                    <a
                      className="fw-medium d-inline border-0 bg-transparent meta-link"
                      href={product.product_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.product_title}
                    </a>
                  </h3>
                  <div className="text-start mb-2">
                    <span>Price: </span>
                    {product.product_price_old !== "null" && (
                      <del className="fs-sm text-muted me-1 text-truncate">
                        {product.product_price_old}
                      </del>
                    )}
                    <span className="text-heading fw-semibold text-truncate">
                      {product.product_price}
                    </span>
                  </div>
                  <div className="text-start mb-2">
                    <span>Rating: </span>
                    <p className="fs-sm fw-medium d-inline">
                      {product.product_rating}
                    </p>
                  </div>
                  <div className="text-start mb-2">
                    <span>Review: </span>
                    <p className="fs-sm fw-medium d-inline">
                      (
                      {product.product_rating_count
                        ? product.product_rating_count
                        : product.product_review_count}
                      )
                    </p>
                  </div>
                  <div className="text-start mb-2">
                    <span>Description: </span>
                    <p className="fs-sm fw-medium d-inline">
                      {product.product_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3
            className="text-center"
            style={{
              color: "rgb(170, 170, 170)",
            }}
          >
            No product to compare
          </h3>
        )}
      </div>
    </section>
  );
}

export default Compare;
