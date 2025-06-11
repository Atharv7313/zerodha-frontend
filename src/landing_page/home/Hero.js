import React from 'react'

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'> 
        <img src='media/images/homeHero.png' className='mb-5'/>
      <h1 className='mt-5'>Invest in everything</h1>
      <p>
        Online platform to invest in stocks, derivatives, mutual fund, and more
      </p>
      <button style={{width:"25%",margin:"0 auto"}} className='p-2 mb-5 btn btn-primary fs-5'>Signup Now</button>
      </div>

    </div>
  )
}

export default Hero
