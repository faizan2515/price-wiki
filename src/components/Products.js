import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useApp } from "../withAppProvider";
import { NavLink } from "react-router-dom";

function Products({
  title,
  loading,
  products,
  priceRange,
  setPriceRange,
  handlePriceRange,
  pagination,
  handlePagination,
  sort,
  setSort,
  handleSort,
}) {
  const { setCompareProducts } = useApp();

  return (
    <section className="container pt-5">
      <h2 className="text-center mb-5">{title} Products</h2>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-5 px-3 mb-5">
        <div className="d-flex align-items-center gap-3 px-4 py-2">
          <Typography
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
            }}
          >
            Sort by:
          </Typography>
          <div className="d-flex align-items-center gap-3">
            <FormControlLabel
              control={
                <Checkbox
                  checked={sort}
                  onChange={(e) => {
                    setSort(e.target.checked);
                    if (e.target.checked) {
                      handleSort();
                    } else {
                      if (title === "Amazon") {
                        handlePagination(
                          "https://pricing.code7labs.co.uk/api/amazon/all"
                        );
                      } else {
                        handlePagination(
                          "https://pricing.code7labs.co.uk/api/daraz/all"
                        );
                      }
                    }
                  }}
                />
              }
              label="Descending"
            />
          </div>
        </div>
        <div className="px-4 py-2">
          <Typography
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              marginBottom: ".5rem",
            }}
          >
            Price Range:
          </Typography>
          <div className="d-flex gap-3">
            <TextField
              value={priceRange.from}
              onChange={(e) => {
                if (e.target.value < 0) {
                  setPriceRange((previous) => ({
                    ...previous,
                    from: 0,
                  }));

                  return;
                }
                setPriceRange((previous) => ({
                  ...previous,
                  from: e.target.value,
                }));
              }}
              label="From"
              variant="outlined"
              type="number"
              size="small"
              style={{
                width: 120,
              }}
            />
            <TextField
              value={priceRange.to}
              onChange={(e) => {
                if (e.target.value < 0) {
                  setPriceRange((previous) => ({
                    ...previous,
                    to: 0,
                  }));

                  return;
                }
                setPriceRange((previous) => ({
                  ...previous,
                  to: e.target.value,
                }));
              }}
              label="To"
              variant="outlined"
              type="number"
              size="small"
              style={{
                width: 120,
              }}
            />
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                if (
                  Number(priceRange.from) === 0 &&
                  Number(priceRange.to) === 0
                ) {
                  if (title === "Amazon") {
                    handlePagination(
                      "https://pricing.code7labs.co.uk/api/amazon/all"
                    );
                  } else {
                    handlePagination(
                      "https://pricing.code7labs.co.uk/api/daraz/all"
                    );
                  }
                } else {
                  handlePriceRange(priceRange);
                }
              }}
              style={{ backgroundColor: "var(--bs-primary)" }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`row ${pagination.length && "pagination-min-height"} ${
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
                    <NavLink
                      to={`category?name=${product.category?.toLowerCase()}`}
                      className="border-0 bg-transparent meta-link fs-xs mb-1 text-truncate"
                    >
                      {product.category}
                    </NavLink>
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
