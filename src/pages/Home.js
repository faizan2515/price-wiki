import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";

function Home() {
  const [amazonProducts, setAmazonProducts] = useState([]);
  const [amazonPagination, setAmazonPagination] = useState([]);
  const [amazonLoading, setAmazonLoading] = useState(false);
  const [amazonPriceRange, setAmazonPriceRange] = useState({
    from: 0,
    to: 0,
  });
  const [amazonSort, setAmazonSort] = useState(false);

  const [darazProducts, setDarazProducts] = useState([]);
  const [darazPagination, setDarazPagination] = useState([]);
  const [darazLoading, setDarazLoading] = useState(false);
  const [darazPriceRange, setDarazPriceRange] = useState({
    from: 0,
    to: 0,
  });
  const [darazSort, setDarazSort] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    handleAmazonPagination("https://pricing.code7labs.co.uk/api/amazon/all");
    handleDarazPagination("https://pricing.code7labs.co.uk/api/daraz/all");
  }, []);

  const handleAmazonPagination = async (url) => {
    setAmazonLoading(true);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setAmazonProducts(response.data.data.data);
        setAmazonPagination(response.data.data.links);
        setAmazonLoading(false);
      } else {
        setAmazonLoading(false);
      }
    } catch (error) {
      setAmazonLoading(false);
      console.error(error.message);
    }
  };

  const handleAmazonSearch = async (value) => {
    setAmazonLoading(true);
    setAmazonSort(false);
    setAmazonPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/search/${value}`
      );
      if (response.status === 200) {
        setAmazonProducts(
          response.data.AmazonProducts ? response.data.AmazonProducts : []
        );
        setAmazonPagination([]);
        setAmazonLoading(false);
      } else {
        setAmazonLoading(false);
      }
    } catch (error) {
      setAmazonLoading(false);
      console.error(error.message);
    }
  };

  const handleAmazonPriceRange = async (value) => {
    setAmazonLoading(true);
    setSearch("");
    setAmazonSort(false);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/filter/${value.from}/${value.to}`
      );
      if (response.status === 200) {
        setAmazonProducts(
          response.data.AmazonProducts ? response.data.AmazonProducts : []
        );
        setAmazonPagination([]);
        setAmazonLoading(false);
      } else {
        setAmazonLoading(false);
      }
    } catch (error) {
      setAmazonLoading(false);
      console.error(error.message);
    }
  };

  const handleAmazonSort = async () => {
    setAmazonLoading(true);
    setSearch("");
    setAmazonPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        "https://pricing.code7labs.co.uk/api/amazon/allDESC"
      );
      if (response.status === 200) {
        setAmazonProducts(response.data.data.data);
        setAmazonPagination(response.data.data.links);
        setAmazonLoading(false);
      } else {
        setAmazonLoading(false);
      }
    } catch (error) {
      setAmazonLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazPagination = async (url) => {
    setDarazLoading(true);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setDarazProducts(response.data.data.data);
        setDarazPagination(response.data.data.links);
        setDarazLoading(false);
      } else {
        setDarazLoading(false);
      }
    } catch (error) {
      setDarazLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazSearch = async (value) => {
    setDarazLoading(true);
    setDarazSort(false);
    setDarazPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/searchdaraz/${value}`
      );
      if (response.status === 200) {
        setDarazProducts(
          response.data.DarazProducts ? response.data.DarazProducts : []
        );
        setDarazPagination([]);
        setDarazLoading(false);
      } else {
        setDarazLoading(false);
      }
    } catch (error) {
      setDarazLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazPriceRange = async (value) => {
    setDarazLoading(true);
    setSearch("");
    setDarazSort(false);
    try {
      const response = await axios.get(
        `https://pricing.code7labs.co.uk/api/filter1/${value.from}/${value.to}`
      );
      if (response.status === 200) {
        setDarazProducts(
          response.data.DarazProducts ? response.data.DarazProducts : []
        );
        setDarazPagination([]);
        setDarazLoading(false);
      } else {
        setDarazLoading(false);
      }
    } catch (error) {
      setDarazLoading(false);
      console.error(error.message);
    }
  };

  const handleDarazSort = async () => {
    setDarazLoading(true);
    setSearch("");
    setDarazPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        "https://pricing.code7labs.co.uk/api/daraz/alldarazDESC"
      );
      if (response.status === 200) {
        setDarazProducts(response.data.data.data);
        setDarazPagination(response.data.data.links);
        setDarazLoading(false);
      } else {
        setDarazLoading(false);
      }
    } catch (error) {
      setDarazLoading(false);
      console.error(error.message);
    }
  };

  const handleSearch = async () => {
    handleDarazSearch(search);
    handleAmazonSearch(search);
  };

  return (
    <>
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
                handleAmazonPagination(
                  "https://pricing.code7labs.co.uk/api/amazon/all"
                );
                handleDarazPagination(
                  "https://pricing.code7labs.co.uk/api/daraz/all"
                );
              } else {
                setSearch(e.target.value);
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearch(search);
              }
            }}
            placeholder="Search products..."
          />
        </div>
      </section>
      {/* Amazon Products (grid) */}
      <Products
        title="Amazon"
        loading={amazonLoading}
        products={amazonProducts}
        pagination={amazonPagination}
        priceRange={amazonPriceRange}
        setPriceRange={setAmazonPriceRange}
        handlePriceRange={handleAmazonPriceRange}
        handlePagination={handleAmazonPagination}
        sort={amazonSort}
        setSort={setAmazonSort}
        handleSort={handleAmazonSort}
      />
      {/* Daraz Products (grid) */}
      <Products
        title="Daraz"
        loading={darazLoading}
        products={darazProducts}
        pagination={darazPagination}
        priceRange={darazPriceRange}
        setPriceRange={setDarazPriceRange}
        handlePriceRange={handleDarazPriceRange}
        handlePagination={handleDarazPagination}
        sort={darazSort}
        setSort={setDarazSort}
        handleSort={handleDarazSort}
      />
    </>
  );
}

export default Home;
