import wretch from "wretch";
import Cookies from "js-cookie";

const api = wretch("http://localhost:8000").accept("application/json");

const storeToken = (token: string, type: "access" | "refresh") => {
  Cookies.set(`${type}Token`, token);
};

const getToken = (type: string) => {
  return Cookies.get(`${type}Token`);
};

const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

const register = (email: string, password1: string,password2: string) => {
  return api.post({ email, password1, password2 }, "/api/auth/register/");
};

const login = (email: string, password: string) => {
  return api.post({ email, password }, "/api/auth/login/");
};

const logout = () => {
  const refreshToken = getToken("refresh");
  return api.post({ refresh: refreshToken }, "/api/auth/logout/");
};

const handleJWTRefresh = () => {
  const refreshToken = getToken("refresh");
  return api.post({ refresh: refreshToken }, "/api/auth/token/refresh/");
};

const resetPassword = (email: string) => {
  return api.post({ email }, "/auth/users/reset_password/");
};

const resetPasswordConfirm = (
  new_password: string,
  re_new_password: string,
  token: string,
  uid: string
) => {
  return api.post(
    { uid, token, new_password, re_new_password },
    "/auth/users/reset_password_confirm/"
  );
};

export const AuthActions = () => {
  return {
    login,
    resetPasswordConfirm,
    handleJWTRefresh,
    register,
    resetPassword,
    storeToken,
    getToken,
    logout,
    removeTokens,
  };
};
