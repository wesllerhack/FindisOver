import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom"
import * as Bi from "react-icons/bi"
import './styles.css'

const NavBar = () => {
  const [ search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("");
  }


  return (
    <div>
        <nav id="navbar">
            <h2>
                <Link to="/"><Bi.BiCameraMovie/>FindisOver</Link>
            </h2>
                <form onSubmit={handleSubmit}>
                    <input 
                          type="text" 
                          placeholder='Busque um filme'  
                          onChange={(e) => setSearch(e.target.value)}
                          value={search}
                    />
                    <button type='submit'><Bi.BiSearchAlt2/> </button>
                </form>
        </nav>
        <Outlet/>
    </div>
  )
}

export default NavBar