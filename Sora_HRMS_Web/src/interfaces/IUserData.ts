export interface IUserData {
  employeeId: string;
  username: string;
  profilePicture: string;
  role: string;
  token: string;
}

export interface IInitialState {
  currentUser: IUserData;
  status: string;
}
