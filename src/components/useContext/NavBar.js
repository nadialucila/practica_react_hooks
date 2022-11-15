import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to='./'>useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link " to="./"> Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-link" to="./about"> About </Link>
                <Link className="nav-link" to="./login"> Login </Link>
            </div>
        </div>
    </nav>
  )
}
