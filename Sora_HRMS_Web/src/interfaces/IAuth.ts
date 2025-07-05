export interface ISignInData {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface ISignUpData {
  username: string;
  mobileNo: string;
  email: string;
  password: string;
  confirmPassword: string;
}
