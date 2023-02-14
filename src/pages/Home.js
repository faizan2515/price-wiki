import brands from "../data/brands";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";

function Home() {
  const [amazonProducts, setAmazonProducts] = useState([]);
  const [amazonPagination, setAmazonPagination] = useState([]);
  const [amazonLoading, setAmazonLoading] = useState(false);
  const [amazonSearch, setAmazonSearch] = useState("");
  const [amazonPriceRange, setAmazonPriceRange] = useState({
    from: 0,
    to: 0,
  });

  const [darazProducts, setDarazProducts] = useState([]);
  const [darazPagination, setDarazPagination] = useState([]);
  const [darazLoading, setDarazLoading] = useState(false);
  const [darazSearch, setDarazSearch] = useState("");
  const [darazPriceRange, setDarazPriceRange] = useState({
    from: 0,
    to: 0,
  });

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
    setAmazonPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `http://pricing.code7labs.co.uk/api/search/${value}`
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
    setAmazonSearch("");
    try {
      const response = await axios.get(
        `http://pricing.code7labs.co.uk/api/filter/${value.from}/${value.to}`
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
    setDarazPriceRange({
      from: 0,
      to: 0,
    });
    try {
      const response = await axios.get(
        `http://pricing.code7labs.co.uk/api/search/${value}`
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
    setDarazSearch("");
    try {
      const response = await axios.get(
        `http://pricing.code7labs.co.uk/api/filter/${value.from}/${value.to}`
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

  return (
    <>
      {/* Amazon Products (grid) */}
      <Products
        title="Amazon"
        loading={amazonLoading}
        products={amazonProducts}
        pagination={amazonPagination}
        search={amazonSearch}
        setSearch={setAmazonSearch}
        handleSearch={handleAmazonSearch}
        priceRange={amazonPriceRange}
        setPriceRange={setAmazonPriceRange}
        handlePriceRange={handleAmazonPriceRange}
        handlePagination={handleAmazonPagination}
      />
      {/* Daraz Products (grid) */}
      <Products
        title="Daraz"
        loading={darazLoading}
        products={darazProducts}
        pagination={darazPagination}
        search={darazSearch}
        setSearch={setDarazSearch}
        handleSearch={handleDarazSearch}
        priceRange={darazPriceRange}
        setPriceRange={setDarazPriceRange}
        handlePriceRange={handleDarazPriceRange}
        handlePagination={handleDarazPagination}
      />
      {/* Brands */}
      <section className="container pt-5 mt-3 mt-md-0 pt-md-6 pt-lg-7 pb-md-4">
        <h2 className="mb-5 text-center">Shop by brand</h2>
        <div className="row">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="col-md-3 col-sm-4 col-6 mb-grid-gutter"
            >
              <button className="w-100 card align-items-center border-0 shadow card-hover py-3 py-sm-4">
                <div className="card-body px-1 py-0 text-center">
                  <div className="swap-image">
                    <img
                      className="swap-to"
                      src={brand.image}
                      alt="Brand logo"
                      width="150"
                    />
                    <img
                      className="swap-from"
                      src={brand.imageGray}
                      alt="Brand logo"
                      width="150"
                    />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
