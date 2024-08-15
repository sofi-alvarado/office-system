import { apiClient } from './apliClient';

export const authenticateUser = async (email, password) => {
  try {
    const response = await apiClient.post(`?action=authenticate`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
};

export const updatePassword = async (id, newPassword) => {
  try {
    const response = await apiClient.post(`?action=updatePassword`, { id, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error updating password:', error);
    return null;
  }
};