import { useState, useCallback } from 'react';
import { 
  getEmployees,
  updateEmployee,
  createEmployee,
  deleteEmployee
} from '../api/employees';

const useEmployee = (employeeId) => {
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

  const editEmployee = useCallback(async (employeeId, employeeData) => {
    setLoading(true);
    try {
      const response = await updateEmployee(employeeId, employeeData);
      setData(response.data);
    } catch (error) {
      console.error('Ha ocurrido un error al actualizar este empleado', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addEmployee = useCallback(async (employeeData) => {
    setLoading(true);
    try {
      const response = await createEmployee(employeeData);
      setData(response.data);
    } catch (error) {
      console.error('Ha ocurrido un error al crear este empleado.', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const removeEmployee = useCallback(async (employeeId) => {
    setLoading(true);
    try {
      const response = await deleteEmployee(employeeId);
      setData(response.data);
    } catch (error) {
      console.error('Ha ocurrido un error al eliminar este empleado', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);


  return { 
    data, 
    loading, 
    error,
    fetchEmployees,
    editEmployee,
    addEmployee,
    removeEmployee 
  };
};

export default useEmployee;