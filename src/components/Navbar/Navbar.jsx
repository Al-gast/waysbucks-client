import React, { useState } from 'react'
import './navbar.css'
import Modal from '../Modal/modal';

export default function Navbar() {

  // Open and close modal login
  const [modalLogin, setModalLogin] = useState(false);
  
  const openModalLogin = () => {
    setModalLogin(true);
  };
  
  const closeModalLogin = () => {
    setModalLogin(false);
  };

  // change modal Login
  const changeModalLogin = () => {
    setModalLogin(false);
    setModalRegister(true)
  }

  // Open and close modal register
  const [modalRegister, setModalRegister] = useState(false);

  const openModalRegister = () => {
    setModalRegister(true);
  };

  const closeModalRegister = () => {
    setModalRegister(false);
  };

  // change modal Register
  const changeModalRegister = () => {
    setModalRegister(false);
    setModalLogin(true)
  }


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
              <div className='modal-auth'>
                <p className='title-modal'>Login</p>
                <div className='div-input'>
                  <input type='email' name='loginEmail' className='input-text' placeholder='Email'/>
                  <input type='password' name='loginPassword' className='input-text' placeholder='Password'/>
                </div>
                <p className='btn-modal'>Login</p>
                <p className='have-account'>Don't have an account ? Klik <b className='here' onClick={changeModalLogin}>Here</b></p>
              </div>
            </Modal>
            <p className='register' onClick={openModalRegister}>Register</p>
            <Modal isOpen={modalRegister} onClose={closeModalRegister}>
              <div className='modal-auth'>
                <p className='title-modal'>Register</p>
                <div className='div-input'>
                  <input type='email' name='registerEmail' className='input-text' placeholder='Email'/>
                  <input type='password' name='registerPassword' className='input-text' placeholder='Password'/>
                  <input type='text' name='registerFullName' className='input-text' placeholder='Full Name'/>
                </div>
                <p className='btn-modal'>Register</p>
                <p className='have-account'>Already have an account ? Klik <b className='here' onClick={changeModalRegister}>Here</b></p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
