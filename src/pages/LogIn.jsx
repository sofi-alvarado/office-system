import React, {useState} from "react";
import { Link } from 'react-router-dom';

import useAuthentication from "../hooks/useAuthentication";
import bannerImage from "../assets/coworking-people-illustration.png"
import "../styles/LogIn.css"

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {authError, authenticate} = useAuthentication()

  const handleLogin = async (e) => {
    e.preventDefault();
    await authenticate(email, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 left_banner full-height-col">
          <img alt="people in an office" src={bannerImage}/>
        </div>
        <div className="col-sm-6 full-height-col">
          <div className="row mx-4">
            <div className="col-sm-12">
              <label htmlFor="email-input" className="form-label mt-4">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control" 
                  id="email-input" 
                  placeholder="Ingrese email" 
                />
            </div>
            <div className="col-sm-12">
              <label htmlFor="password-input" className="form-label mt-4">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" 
                id="password-input" 
                placeholder="Contraseña" 
                autoComplete="off" 
              />
              {authError && <small id="warning" className="form-text text-danger">{authError}</small>}
            </div>
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary my-3 w-100">Iniciar Sesion</button>
              <small id="new-account" className="form-text text-muted">¿No tienes cuenta? <Link to="/register">Regístrate</Link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>

  )

}

export default LogIn;