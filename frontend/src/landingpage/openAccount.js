import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-lg-8">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            type="button"
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "min(220px, 100%)", margin: "0 auto" }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
