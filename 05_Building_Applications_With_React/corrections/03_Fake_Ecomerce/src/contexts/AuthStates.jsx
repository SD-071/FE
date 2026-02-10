import { useState } from 'react';
import { AuthContext } from '.';

function AuthStates({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <AuthContext
      value={{
        user,
        setUser,
        token,
        setToken,
        isAuth,
        setIsAuth,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext>
  );
}

export default AuthStates;
