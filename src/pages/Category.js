import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useApp } from "../withAppProvider";

function Category() {
  const [searchParams] = useSearchParams();
  const { setCompareProducts } = useApp();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleCategory(searchParams.get("name"));
  }, [searchParams]);

  const handleCategory = async (value) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/category/${value}`
      );
      if (response.status === 200) {
        setProducts(response.data.Product ? response.data.Product : []);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  return (
    <section className="container pt-5">
      <h2 className="mb-5">
        Category: {searchParams.get("name").toUpperCase()}
      </h2>

      <div
        className={`row ${
          loading && "justify-content-center align-items-center"
        } pb-1`}
      >
        {loading ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : products.length > 0 ? (
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
                </div>
                <div className="card-footer">
                  <div>
                    {product.product_price_old !== "null" && (
                      <del className="fs-sm text-muted me-1 text-truncate">
                        {product.product_price_old}
                      </del>
                    )}
                    <span className="text-heading fw-semibold text-truncate">
                      {product.product_price}
                    </span>
                  </div>
                  <button
                    className="btn-wishlist text-primary bg-transparent border-0"
                    onClick={() => {
                      setCompareProducts((previous) => [
                        ...previous,
                        { ...product },
                      ]);
                    }}
                  >
                    <i className="ai-shuffle"></i>
                    <span className="btn-tooltip">Compare</span>
                  </button>
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
            No Product Found
          </h3>
        )}
      </div>
    </section>
  );
}

export default Category;
