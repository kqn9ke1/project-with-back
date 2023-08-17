import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { IAuthContextTypes, ITokens, IUSerLogin, IUserRegister } from "./type";
import axios from "axios";
import { BASE_URL } from "../../utils/consts";
import $axios from "../../utils/axios";

const authContext = createContext<null | IAuthContextTypes>(null);

export const useAuthContext = (): IAuthContextTypes => {
  return useContext(authContext) as IAuthContextTypes; //кастомный хук?
};

interface IAuthContextProps {
  children: ReactNode;
}
const AuthContext: FC<IAuthContextProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (credentials: IUserRegister) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/account/register/`,
        credentials
      );
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (credentials: IUSerLogin) => {
    try {
      const { data: tokens } = await axios.post<ITokens>(
        `${BASE_URL}/account/login/`,
        credentials
      );

      localStorage.setItem("tokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${BASE_URL}/account/profile/`);
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    localStorage.removeItem("tokens");
    setUser(null);
  };

  const checkAuth = async () => {
    try {
      const tokens = JSON.stringify(localStorage.getItem("tokens") as string);
      if (tokens) {
        const { data } = await $axios.get(`${BASE_URL}/account/profile/`);
        setUser(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    user,
    register,
    login,
    logout,
    checkAuth,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
