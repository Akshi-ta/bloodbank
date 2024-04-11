import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Navigate = useNavigate();
  const login = () => {
      setIsLoggedIn(true);
      Navigate("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('email'); 
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
