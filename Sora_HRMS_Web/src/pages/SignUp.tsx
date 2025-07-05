import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ISignUpData } from "../interfaces/IAuth";
import { signUpService } from "../services/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    mobileNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await signUpService(signUpForm);
      console.log("Sign Up Success: ", response);

      if (response) {
        navigate("/signin");
      }
      // console.log("Data: ", signUpForm);
    } catch (err) {
      console.log("Error signing up: ", err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
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

          <p>Mobile Number</p>
          <input
            placeholder="9876452342"
            type="number"
            name="mobileNo"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <p>Email</p>
          <input
            placeholder="email@gmail.com"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <p>Password</p>
          <input
            placeholder="********"
            type="password"
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
            // className="border border-blue-500"
          />

          <p>Confirm Password</p>
          <input
            placeholder="********"
            type="password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />

          <button className="border cursor-pointer border-green-500 rounded-xl">
            submit
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 cursor-pointer">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
