import { useState, type ChangeEvent, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import type { ISignInData } from "../../interfaces/IAuth";
import { userSignInThunk } from "../../features/userSlice";
import type { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import type { IUserData } from "../../interfaces/IUserData";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [signInForm, setSignInForm] = useState<ISignInData>({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRedirect = (userData: IUserData) => {
    if (userData.token) {
      navigate("/dashboard");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("lol!");
    console.log("UserData", signInForm);

    const whatIGet = await dispatch(userSignInThunk(signInForm)).unwrap();
    // console.log("Dispatch: ", whatIGet);
    await handleRedirect(whatIGet);
  };

  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        <form
          className="flex flex-col gap-2 h-screen w-96 justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p className="">Username</p>
          <input
            placeholder="Sora1234"
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
            // className="border border-blue-500"
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
            // className="border border-blue-500"
          />
          <input
            type="checkbox"
            name="rememberMe"
            checked={signInForm.rememberMe}
            onChange={(e) => {
              setSignInForm((prev) => ({
                ...prev,
                rememberMe: e.target.checked,
              }));
            }}
          />
          <button className="border cursor-pointer border-green-500 rounded-xl">
            submit
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 cursor-pointer">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
