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