import { apiClient } from './apliClient';

export const getEmployees = async () => {
  try {
    const response = await apiClient.get(`?action=getEmployees`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEmployee = async (employeeId, updatedData) => {
  try {
    const response = await apiClient.put(`?action=updateEmployee&id=${employeeId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const response = await apiClient.post('?action=createEmployee', employeeData);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (employeeId) => {
  try {
    const response = await apiClient.post(`?action=deleteEmployee&id=${employeeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};
