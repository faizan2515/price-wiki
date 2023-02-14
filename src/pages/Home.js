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
  const [amazonSort, setAmazonSort] = useState(false);

  const [darazProducts, setDarazProducts] = useState([]);
  const [darazPagination, setDarazPagination] = useState([]);
  const [darazLoading, setDarazLoading] = useState(false);
  const [darazSearch, setDarazSearch] = useState("");
  const [darazPriceRange, setDarazPriceRange] = useState({
    from: 0,
    to: 0,
  });
  const [darazSort, setDarazSort] = useState(false);

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
    setAmazonSearch("");
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
    setAmazonSearch("");
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
    setDarazSearch("");
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
    setDarazSearch("");
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
        search={darazSearch}
        setSearch={setDarazSearch}
        handleSearch={handleDarazSearch}
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
