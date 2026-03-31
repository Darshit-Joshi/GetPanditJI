import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, getProfile } from "../services/auth.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Check if user already logged in (on refresh)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getProfile();
        setUser(res.data.user);
      } catch (err) {
        console.error("Auth error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // 🔐 Login
  const login = async (credentials) => {
    const res = await loginUser(credentials);
    setUser(res.user);
    return res;
  };

  // 🚪 Logout
  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔥 Custom Hook
export const useAuth = () => useContext(AuthContext);
