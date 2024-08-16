import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { 
  getUsers,
  createUser,
} from '../api/users';

const useUser = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      if (response.data === null) {
        setData(null);
      } else {
        setData(response);
      }
    } catch (error) {
      console.error('Ha ocurrido un error al buscar a los empleados.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addUser = useCallback(async (email, password) => {
    const role = "Admin";
    setLoading(true);
    try {
      const response = await createUser(email, password, role);
      if (!response.data === "success") { 
        setError('Ha ocurrido un error.');
        setData(null);
      } else {
        setData(response);
        setError(null);
        navigate('/home');
      }
    } catch (error) {
      console.error('Ha ocurrido un error al crear este empleado.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return { 
    data, 
    loading, 
    error,
    fetchUsers,
    addUser
  };
};

export default useUser;