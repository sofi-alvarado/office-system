import { useState, useCallback } from 'react';
import { 
  authenticateUser,
  updatePassword
} from '../api/authentication';

const useAuthentication = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authenticate = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const response = await authenticateUser(email, password);
      if (response.data === null) {
        setData(null);
      } else {
        setData(response);
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

  return { 
    data, 
    loading, 
    error,
    authenticate,
    editPassword
  };
};

export default useAuthentication;