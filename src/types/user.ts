export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILogoutRequest {
  token: string;
}

export interface IRegisterResponse {
  token: string;
  errors: {
    message: string;
  };
}
export interface ILoginResponse {
  token: string;
  errors: {
    message: string;
  };
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
  accessToken: string;
  user: IUser;
  errors: {
    message: string;
  };
}
