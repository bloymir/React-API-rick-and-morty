import React from 'react'

export const NavBar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark"> 
    <div className="container">
      <a className="navbar-brand text-uppercase" href="/">{brand}</a>
    </div>
  </nav>
  )
}
