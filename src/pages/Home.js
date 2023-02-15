import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useApp } from "../withAppProvider";

function Home() {
  const { setCompareProducts } = useApp();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: 0,
  });

  useEffect(() => {
    handlePagination();
  }, []);

  const handleAmazonPagination = async (marketplace, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/${marketplace}/all?page=${page}`
      );
      if (response.status === 200) {
        setTotalResults(response.data.data.total);
        setProducts(response.data.data.data);
        setPagination(response.data.data.links);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleAmazonSearch = async (value, page) => {
    setLoading(true);
    setSort(false);
    setPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/search/${value}?page=${page}`
      );
      if (response.status === 200) {
        setTotalResults(response.data.AmazonProducts.total);
        setProducts(response.data.AmazonProducts.data);
        setPagination(response.data.AmazonProducts.links);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleAmazonPriceRange = async (value, page) => {
    setLoading(true);
    setSearch("");
    setSort(false);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/filter/${value.from}/${value.to}?page=${page}`
      );
      if (response.status === 200) {
        setTotalResults(response.data.AmazonProducts.total);
        setProducts(response.data.AmazonProducts.data);
        setPagination(response.data.AmazonProducts.links);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleAmazonSort = async (page) => {
    setLoading(true);
    setSearch("");
    setPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/amazon/allDESC?page=${page}`
      );
      if (response.status === 200) {
        setTotalResults(response.data.data.total);
        setProducts(response.data.data.data);
        setPagination(response.data.data.links);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazPagination = async (marketplace, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/${marketplace}/all?page=${page}`
      );
      if (response.status === 200) {
        setProducts((previous) => [...previous, ...response.data.data.data]);
        if (totalResults < response.data.data.total) {
          setTotalResults(response.data.data.total);
          setPagination(response.data.data.links);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazSearch = async (value, page) => {
    setLoading(true);
    setSort(false);
    setPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/searchdaraz/${value}?page=${page}`
      );
      if (response.status === 200) {
        setProducts((previous) => [
          ...previous,
          ...response.data.DarazProducts.data,
        ]);
        if (totalResults < response.data.DarazProducts.total) {
          setTotalResults(response.data.DarazProducts.total);
          setPagination(response.data.DarazProducts.links);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazPriceRange = async (value, page) => {
    setLoading(true);
    setSearch("");
    setSort(false);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/filter1/${value.from}/${value.to}?page=${page}`
      );
      if (response.status === 200) {
        setProducts((previous) => [
          ...previous,
          ...response.data.DarazProducts.data,
        ]);
        if (totalResults < response.data.DarazProducts.total) {
          setTotalResults(response.data.DarazProducts.total);
          setPagination(response.data.DarazProducts.links);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazSort = async (page) => {
    setLoading(true);
    setSearch("");
    setPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/daraz/alldarazDESC?page=${page}`
      );
      if (response.status === 200) {
        setProducts((previous) => [...previous, ...response.data.data.data]);
        if (totalResults < response.data.data.total) {
          setTotalResults(response.data.data.total);
          setPagination(response.data.data.links);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  const handleSearch = async (page) => {
    handleAmazonSearch(search, page).then(() => {
      handleDarazSearch(search, page);
    });
  };

  const handleSort = async (page) => {
    handleAmazonSort(page).then(() => {
      handleDarazSort(page);
    });
  };

  const handlePriceRange = async (page) => {
    console.log(page);
    handleAmazonPriceRange(priceRange, page).then(() => {
      handleDarazPriceRange(priceRange, page);
    });
  };

  const handlePagination = async (page) => {
    handleAmazonPagination("amazon", page).then(() => {
      handleDarazPagination("daraz", page);
    });
  };

  return (
    <section className="container pt-5">
      <div
        className="d-flex flex-nowrap align-items-center"
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: 27,
          width: "100%",
          padding: "4px 20px",
        }}
      >
        <i className="ai-search fs-xl"></i>
        <input
          className="form-control form-control-xl navbar-search-field border-0"
          type="text"
          value={search}
          onChange={(e) => {
            if (e.target.value === "") {
              setSearch(e.target.value);
              handlePagination();
            } else {
              setSearch(e.target.value);
            }
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search products..."
        />
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-0 gap-sm-5 px-3 mb-5 mt-3">
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
                      handlePagination();
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
                  handlePagination();
                } else {
                  handlePriceRange();
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
          products.map((product, index) => (
            <div
              key={index}
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
              const url = page.url?.split("?")[1].split("=")[1];
              if (page.label === "&laquo; Previous")
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        if (search !== "") {
                          handleSearch(url);
                        } else if (sort) {
                          handleSort(url);
                        } else if (
                          Number(priceRange.from) !== 0 ||
                          Number(priceRange.to) !== 0
                        ) {
                          handlePriceRange(url);
                        } else {
                          handlePagination(url);
                        }
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
                        if (search !== "") {
                          handleSearch(url);
                        } else if (sort) {
                          handleSort(url);
                        } else if (
                          Number(priceRange.from) !== 0 ||
                          Number(priceRange.to) !== 0
                        ) {
                          handlePriceRange(url);
                        } else {
                          handlePagination(url);
                        }
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
                      if (search !== "") {
                        handleSearch(url);
                      } else if (sort) {
                        handleSort(url);
                      } else if (
                        Number(priceRange.from) !== 0 ||
                        Number(priceRange.to) !== 0
                      ) {
                        handlePriceRange(url);
                      } else {
                        handlePagination(url);
                      }
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

export default Home;
