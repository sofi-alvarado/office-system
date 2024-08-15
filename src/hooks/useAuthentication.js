import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { 
  authenticateUser,
  logOutUser,
  updatePassword
} from '../api/authentication';

const useAuthentication = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authenticate = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const response = await authenticateUser(email, password);
      if (response.status === "error") {
        setError(response.message);
        setData(null);
      } else {
        setData(response);
        setError(null);
        navigate('/home');
      }
    } catch (error) {
      console.error('Ha ocurrido un error en la autenticacion.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const editPassword = useCallback(async (id, newPassword) => {
    setLoading(true);
    try {
      const response = await updatePassword(id, newPassword);
      setData(response.data);
    } catch (error) {
      console.error('Ha ocurrido un error al actualizar la contrasena.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const logOut = useCallback(async () => {
    setLoading(true);
    try {
      const response = await logOutUser();
      if (!response.data === "success") {
        setError('Ha ocurrido un error al intentar cerrar la sesion');
        setData(null);
      } else {
        setData(response);
        setError(null);
        navigate('/login');
      }
    } catch (error) {
      console.error('Ha ocurrido un error al cerrar sesion.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { 
    data, 
    loading, 
    error,
    authenticate,
    editPassword,
    logOut
  };
};

export default useAuthentication;