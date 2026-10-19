import React from 'react';

function Hero() {
  return (
    <div className='container p-5 m-5'>
      <div className='row text-center p-3 m-3'>
        <h1 className='p-3 m-3'>
          {/* hero
          <i className='fa-yin-yang fa-solid fa-2x fa-spin'></i> */}
        </h1>
        <img src='assets/homeHero.png' alt='Hero' />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='btn btn-primary fs-5 p-2'style={{width:"20%",margin:"0 auto"}} type='button'>Signup</button>
      </div>
    </div>
  );
}

export default Hero;