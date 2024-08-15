import { useState, useCallback } from 'react';
import { 
  getUsers,
  createUser,
} from '../api/users';

const useUser = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const addUser = useCallback(async (userData) => {
    setLoading(true);
    try {
      const response = await createUser(userData);
      setData(response.data);
    } catch (error) {
      console.error('Ha ocurrido un error al crear este empleado.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { 
    data, 
    loading, 
    error,
    fetchUsers,
    addUser
  };
};

export default useUser;