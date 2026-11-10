import React from 'react';

function Hero() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 justify-content-center align-items-center text-center">

        <div className="col-12">

          <img
            src="assets/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
          />

          <h1>Invest in everything</h1>

          <p>
            Online platform to invest in stocks, derivatives,
            mutual funds, and more
          </p>

          <button className="btn btn-primary fs-5 px-5 py-2">
            Signup
          </button>

        </div>

      </div>
    </div>
  );
}

export default Hero;