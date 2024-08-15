import { apiClient } from './apliClient';

export const authenticateUser = async (email, password) => {
  try {
    const response = await apiClient.post(`?action=authenticate`, { email, password });
    console.log(response.data)
    if (response.data.status === 'success') {
      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    } else {
      console.error('Authentication failed:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
};

export const logOutUser = async () => {
  try {
    const response = await apiClient.post(`?action=logout`);
    localStorage.removeItem('token');
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