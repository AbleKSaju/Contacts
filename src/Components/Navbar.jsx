import React, { useState } from 'react'
import AllContact from './AllContact'
import AddContact from './AddContact'
import { Link, Route, Routes } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="container mt-5">
    <nav className="navbar navbar-light bg-light">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-outline-success me-2" type="button">
            <Link style={{textDecoration:'none', color:'black'}} to='/'>All Contacts</Link>
        </button>
        <button className="btn btn-outline-success me-2" type="button" >
            <Link style={{textDecoration:'none', color:'black'}} to='/addContacts'>Add Contacts</Link>

        </button>
        <button className="btn btn-outline-success me-2" type="button">
        <Link style={{textDecoration:'none', color:'black'}} to='/favorites'>Favorites</Link>
        </button>
      </form>
    </nav>
    <div className="container">
        <Routes>
            <Route path='/' element={<AllContact/>}></Route>
            <Route path='/addContacts'element={<AddContact/>}></Route>
        </Routes>
    </div>
  </div>
  )
}

export default Navbar