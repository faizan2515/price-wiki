import React from "react";

function Error() {
  return (
    <div
      className="container d-flex flex-column justify-content-center pt-5 mt-n6 vh-100"
      style={{ flex: "1 0 auto" }}
    >
      <div className="pt-7 pb-5">
        <div className="text-center mb-2 pb-4">
          <h1 className="mb-5">
            <img
              className="d-inline-block"
              src="img/pages/404/404-text.svg"
              alt="Error 404"
            />
            <span className="visually-hidden">Error 404</span>
          </h1>
          <h2>Page not found!</h2>
          <p className="pb-2">
            It seems we can’t find the page you are looking for.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
