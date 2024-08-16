import React from "react";
import useAuthentication from "../hooks/useAuthentication";

const NavBar = () => {
  const { logOut } = useAuthentication();

  const handleLogout = () => {
    logOut();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Office Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}>
                Cerrar sesión
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </nav>
  )
};

export default NavBar;