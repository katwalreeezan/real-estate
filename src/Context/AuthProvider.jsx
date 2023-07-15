import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("authToken"); // Retrieve token from local storage if it exists
  const [auth, setAuth] = useState(storedToken || null);

  useEffect(() => {
    if (auth) {
      localStorage.setItem("authToken", auth); // Save token to local storage
    } else {
      localStorage.removeItem("authToken"); // Remove token from local storage if it's null
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
