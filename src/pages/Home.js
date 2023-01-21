import featuredProducts from "../data/featuredProducts";
import products from "../data/products";
import brands from "../data/brands";

function Home() {
  return (
    <>
      {/* Hero - Featured Products (tabs) */}
      <section className="position-relative bg-gradient pt-5 pt-lg-6 pb-7">
        <div className="shape shape-bottom shape-curve bg-body">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
            <path
              fill="currentColor"
              d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"
            ></path>
          </svg>
        </div>
        <div className="container pb-7">
          <div className="row align-items-center pb-7">
            <div className="col-lg-3">
              <ul
                className="nav nav-tabs media-tabs media-tabs-light justify-content-center justify-content-lg-start pb-3 mb-4 pb-lg-0 mb-lg-0"
                role="tablist"
              >
                {featuredProducts.map((product) => (
                  <li key={product.id} className="nav-item me-3 mb-3">
                    <a
                      className={`nav-link ${product.id === 1 && "active"}`}
                      href={`#${product.link}`}
                      data-bs-toggle="tab"
                      role="tab"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 rounded"
                          src={product.thumbnailImage}
                          alt="Product"
                          width="60"
                        />
                        <div className="w-100 ps-2 ms-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-sm pe-1">{product.title}</div>
                            <i className="ai-chevron-right lead ms-2 me-1"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`tab-pane fade ${
                      product.id === 1 && "show active"
                    }`}
                    id={product.link}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-lg-2 pb-1 mb-4 pb-lg-0 mb-lg-0">
                        <div className="mx-auto" style={{ maxWidth: 443 }}>
                          <img src={product.heroImage} alt={product.alt} />
                        </div>
                      </div>
                      <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                        <div className="ps-xl-5">
                          <h2 className="h1 text-light">{product.title}</h2>
                          <p className="fs-lg text-light mb-lg-5">
                            {product.description}
                          </p>
                          <button className="btn btn-translucent-light">
                            Get now - {product.price}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trending products (grid) */}
      <section className="container pt-5 mt-5 mt-md-0 pt-md-6 pt-lg-7">
        <h2 className="text-center mb-5">Trending products</h2>
        <div className="row pb-1">
          {products.map((product) => {
            if (product.id > 8) return null;
            return (
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
            );
          })}
        </div>
      </section>
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
