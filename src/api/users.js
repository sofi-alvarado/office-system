import { apiClient } from './apliClient';

export const createUser = async (email, password, role) => {
  try {
    const response = await apiClient.post(`?action=createUser`, { email, password, role });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
};

export const getUsers = async () => {
  try {
    const response = await apiClient.get(`?action=getUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};