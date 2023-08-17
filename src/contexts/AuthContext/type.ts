import { IUser } from "../../models/user";

export interface IAuthContextTypes {
  user: IUser | null;
  register: (credentials: IUserRegister) => void;
  login: (credentials: IUSerLogin) => void;
  logout: () => void;
  checkAuth: () => void;
}
export interface IUSerLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUSerLogin {
  password_confirm: string;
}

export interface ITokens {
  access: string;
  refresh: string;
}
