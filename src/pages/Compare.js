import { useState } from "react";
import { useApp } from "../withAppProvider";
import { Button } from "@mui/material";

function Compare() {
  const { compareProducts } = useApp();
  const [bestPrice, setBestPrice] = useState({
    id: null,
    price: Infinity,
  });

  const handleBestPrice = () => {
    if (compareProducts.length > 0) {
      compareProducts.forEach((product, index) => {
        setBestPrice((previous) => {
          if (
            previous.price > parseFloat(product.product_price.replace("$", ""))
          ) {
            return {
              id: index,
              price: parseFloat(product.product_price.replace("$", "")),
            };
          }
          if (
            previous.price >
            parseFloat(product.product_price.replace("Rs. ", ""))
          ) {
            return {
              id: index,
              price: parseFloat(product.product_price.replace("Rs. ", "")),
            };
          }
          return previous;
        });
      });
    }
  };

  return (
    <section className="container pt-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="text-center">Compare Products</h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: "var(--bs-primary)",
          }}
          onClick={handleBestPrice}
        >
          Best Option
        </Button>
      </div>
      <div className="row pb-1">
        {compareProducts.length > 0 ? (
          compareProducts.map((product, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter"
            >
              <div className="card card-product card-hover overflow-hidden">
                {product.product_discount !== "null" && (
                  <span className="badge badge-floating rounded-pill bg-danger">
                    {product.product_discount}
                  </span>
                )}
                {bestPrice !== null && bestPrice.id === index && (
                  <span className="badge badge-floating bg-warning">
                    Best Option
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
