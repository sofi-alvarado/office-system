import React, {useState} from "react";
import useAuthentication from "../hooks/useAuthentication";
import "../styles/LogIn.css"
import bannerImage from "../assets/coworking-people-illustration.png"

import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {authenticateUser} = useAuthentication()

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await authenticateUser(email, password);
    if (response && response.status === 'success') {
      console.log('User authenticated:', response.user);
    } else {
      setError(response.message || 'Invalid credentials');
    }
  };


  return (
    <form onSubmit={handleLogin}>
      <div className="container">
        <div className="row mx-5">
          <div className="col-sm-12 full-height-col">
            <div className="row mx-4">
              <div className="col-sm-12">
                <label for="exampleInputEmail1" className="form-label mt-4">Username</label>
                  <input 
                    type="text" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                  />
              </div>
              <div className="col-sm-12">
                <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                  />
              </div>
              <div className="col-sm-12">
                <label for="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password" 
                  autocomplete="off" 
                />
              </div>
              <div className="col-sm-12">
                <label for="exampleInputPassword1" className="form-label mt-4">Repite la contraseña</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password" 
                  autocomplete="off" 
                />
              </div>
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary my-3 w-100">Crear cuenta</button>
                <small id="emailHelp" className="form-text text-muted">Volver al <Link to="/login">inicio de sesion</Link>.</small>
              </div>
            </div>
          </div>
        </div>
    </div>
    </form>
  )

}

export default Register;