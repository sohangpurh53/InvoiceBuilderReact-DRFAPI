import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || '');

  const updateAccessToken = (token) => {
    setAccessToken(token);
    localStorage.setItem('access_token', token);
  };

  const removeAccessToken = () => {
    setAccessToken('');
    localStorage.removeItem('access_token');
  };

  return (
    <AuthContext.Provider value={{ accessToken, updateAccessToken, removeAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };