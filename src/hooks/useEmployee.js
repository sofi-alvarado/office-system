import { useState, useCallback } from 'react';
import { 
  getEmployees, 
} from '../api/employees';

const useEmployee = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getEmployees();
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
  
  return { 
    data, 
    loading, 
    error,
    fetchEmployees
  };
};

export default useEmployee;