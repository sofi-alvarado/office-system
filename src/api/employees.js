import { apiClient } from './apliClient';

export const getEmployees = async () => {
  try {
    const response = await apiClient.get(`?action=getEmployees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const updateEmployee = async (id, updatedData) => {
  try {
    const response = await apiClient.put(`?action=updateEmployee&id=${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};