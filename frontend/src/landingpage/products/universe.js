import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="assets/smallcaseLogo.png" alt="Smallcase" style={{ width: "150px" }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/streakLogo.png" alt="Streak" style={{ width: "150px" }} />
          <p className="text-small text-muted">Algo and strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/sensibullLogo.svg" alt="Sensibull" style={{ width: "150px" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{ width: "150px" }} />
          <p className="text-small text-muted">Mutual fund platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/goldenpiLogo.png" alt="GoldenPi" style={{ width: "150px" }} />
          <p className="text-small text-muted">Bonds investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/dittoLogo.png" alt="Ditto" style={{ width: "150px" }} />
          <p className="text-small text-muted">Insurance platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
