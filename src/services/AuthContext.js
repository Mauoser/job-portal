import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // load saved session from localStorage
    const saved = localStorage.getItem("jobportal_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("jobportal_user", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    } else {
      localStorage.removeItem("jobportal_user");
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [user]);

  const login = async (email, password) => {
    // calls backend login endpoint - see backend addition if not present
    const res = await axios.post("http://localhost:3000/user/login", {
      email,
      password,
    });
    // expected: { token: '...', email: '...' } or send back user object
    setUser(res.data);
    return res.data;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
