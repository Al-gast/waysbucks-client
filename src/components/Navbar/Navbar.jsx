import React, { useState } from 'react'
import './navbar.css'
import Modal from '../Modal/modal';

export default function Navbar() {

  const [modalLogin, setModalLogin] = useState(false);

  const openModalLogin = () => {
    setModalLogin(true);
  };

  const closeModalLogin = () => {
    setModalLogin(false);
  };

  return (
    <div>
      <div className='navbar'>
        <div>
          <img src='./waysbucks_logo.svg' alt='logo' className='logoNavbar'/>
        </div>
        <div>
          <div className='button'>
            <p className='login' onClick={openModalLogin}>Login</p>
            <Modal isOpen={modalLogin} onClose={closeModalLogin}>
              <p className='title-modal'>Login</p>
              <div className='div-input'>
                <input type='email' name='loginEmail' className='input-text' placeholder='Email'/>
                <input type='password' name='loginPassword' className='input-text' placeholder='Name'/>
              </div>
              <p className='btn-modal'>Login</p>
              <p className='have-account'>Don't have an account ? Klik <b>Here</b></p>
            </Modal>
            <p className='register'>Register</p>
          </div>
        </div>
      </div>
    </div>
  )
}
