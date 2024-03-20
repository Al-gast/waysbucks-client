import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./DetailProduct.css"

export default function DetailProduct() {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <div>
            <img src="./coffee-1.svg" alt="coffee" width={436}/>
        </div>
        <div className='outer-topping'>
            <div>
                <p className='title'>Ice Coffee Palm Sugar</p>
                <p className='price'>Rp.27.000</p>
            </div>
            <div>
                <p className='topping-text'>Toping</p>
                <div>
                    <div>
                        <img src="./topping-1.svg" alt="topping" />
                        <p className='topping-name'>Bubble Tea Gelatin</p>
                    </div>
                </div>
            </div>
            <div className='total'>
                <p>Total</p>
                <p>Rp.27.000</p>
            </div>
            <div>
                <p className='btn'>Add Cart</p>
            </div>
        </div>
    </div>
    </>
  )
}
