import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './home.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='outer'>
        <div className='heroes'>
          <div className='heroe'>
            <div className='hero'>
              <div className='text-hero'>
                <p className='waysbucks'>WAYSBUCKS</p>
                <p className='slogan'>Things are changing, but we’re still here for you</p>
                <p className='description'>We have temporarily closed our in-store cafes, but select <br/> grocery and drive-thru locations remaining open. <br/> Waysbucks Drivers is also available <br/> <br/>Let’s Order...</p>
              </div>
              <img src='./img_hero.svg' className='img-hero'/>
            </div>
          </div>
        </div>
        <p className='lets-order'>Let’s Order</p>
        <div className='coffee'>
          <div className='card-home'>
            <img src='./coffee-1.svg' alt='coffee'/>
            <p className='card-title'>Ice Coffee Palm Sugar</p>
            <p className='card-price'>Rp.27.000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
