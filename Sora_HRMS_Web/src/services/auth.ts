import axios from "axios";
import type { ISignInData, ISignUpData } from "../interfaces/IAuth";

const globalApi = "http://localhost:3000";

export const signInService = async (signInData: ISignInData) => {
  try {
    const response = await axios.post(
      `${globalApi}/api/auth/login`,
      signInData
    );
    // console.log("The sign in was successful: ", response.data);

    return response.data;
  } catch (err) {
    console.log("There was an error trying to Signin: ", err);
    throw err;
  }
};

export const signUpService = async (signUpData: ISignUpData) => {
  // try {
  const response = await axios.post(
    `${globalApi}/api/auth/register`,
    signUpData
  );

  return response.data;
  // } catch (err) {
  // throw err;
  // }
};
