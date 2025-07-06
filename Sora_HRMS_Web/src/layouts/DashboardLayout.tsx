import { resetState } from "@/features/userSlice";
import { AppDispatch } from "@/store";
import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

type Props = {};

const DashboardLayout = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogOut = () => {
    localStorage.removeItem("userData");
    dispatch(resetState());
    window.location.reload();
  };

  return (
    <>
      <div className="flex gap-4">
        <a href="/dashboard" className="cursor-pointer">
          Dashboard
        </a>
        <a href="/attendance" className="cursor-pointer">
          Attendance
        </a>
        <a href="/department" className="cursor-pointer">
          Department
        </a>
        <a href="/employee" className="cursor-pointer">
          Employee
        </a>
        <a href="/leave" className="cursor-pointer">
          Leave
        </a>
        <button className="cursor-pointer" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
      {<Outlet />}
      <div>Footer</div>
    </>
  );
};

export default DashboardLayout;
