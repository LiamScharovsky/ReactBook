import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
      <div><nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/"> PupChat</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" to="/sent">Sent</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/deleted">Deleted</Link>
                  </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link className="nav-link" to="/signin">Sign In</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/signin">Log Out</Link>
                  </li>
              </ul>
          </div>
      </nav></div>
  )
}
