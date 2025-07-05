import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import type { IUserData } from "../interfaces/IUserData";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const userData = localStorage.getItem("userData");
  let parsedUserData: IUserData;

  if (userData) {
    parsedUserData = JSON.parse(userData);
    console.log(parsedUserData);

    // you can implement token verification with the backend [if you want to!]

    if (parsedUserData.token) {
      return <>{children}</>;
    }
  }

  return <Navigate to="/signin" replace={true} />;
};

export default ProtectedRoutes;
