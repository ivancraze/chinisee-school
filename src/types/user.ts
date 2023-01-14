export interface IUserRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserRegisterResponse {
  errors: {
    message: string;
  };
}
export interface IUserLoginResponse {
  token: string;
  errors: {
    message: string;
  };
}
