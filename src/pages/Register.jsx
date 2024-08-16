import React, {useState} from "react";
import { Link } from "react-router-dom";

import useUser from "../hooks/useUser";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [error, setError] = useState('');

  const { addUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    await addUser(email, password);
  };

  const handlePasswordChange = (e) => {
    setSecondPassword(e.target.value);
    if (password !== e.target.value) {
      setError('Las contraseñas no coinciden');
    } else {
      setError(''); 
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="container">
        <div className="row mx-lg-5 mx-0">
          <div className="col-sm-12 full-height-col">
            <div className="row mx-4">
              <div className="col-sm-12">
                <label htmlFor="input-email" className="form-label mt-4">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control" 
                  id="input-email"
                  placeholder="Email" 
                  required
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="input-password" className="form-label mt-4">Contraseña</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control" 
                  id="input-password" 
                  placeholder="Contraseña" 
                  autoComplete="off" 
                  required
                />
              </div>
              <div className="col-sm-12">
                <label htmlFor="second-input-password" className="form-label mt-4">Repite la contraseña</label>
                <input 
                  type="password" 
                  value={secondPassword}
                  onChange={handlePasswordChange}
                  className="form-control" 
                  id="second-input-password" 
                  placeholder="Contraseña" 
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-sm-12">
                {error && <small id="back-login" className="form-text text-danger">{error}</small>}
                <button type="submit" className="btn btn-primary my-3 w-100">Crear cuenta</button>
                <small id="back-login" className="form-text text-muted">Volver al <Link to="/login">inicio de sesion</Link>.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register;