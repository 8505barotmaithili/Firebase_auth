import { createContext, useState } from "react";

export const AuthContext = createContext();

export function Authcontextprovider({ children }) {
  const [token, settoken] = useState(() => localStorage.getItem("token"));

  const handleLogin = (value) => {
    settoken(value);
    localStorage.setItem("token", value);
  };

  const handleLogout = () => {
    settoken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
