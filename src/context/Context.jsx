import { createContext, useState, useTransition } from "react";

export const AppContext = createContext();

export default function AppcontextProvider({ children }) {
 
    const [loading,setLoading]=useState(false)
  const [isDark,setIsDark]=useState(false)
  const [error,setError]=useState(false)
  const [cartCount, setCartCount]=useState([])
  const toggle = () => {
    setIsDark((prev)=>!prev)
  };
  const value = { loading,setLoading, isDark ,cartCount,setCartCount ,toggle,setError,error};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
