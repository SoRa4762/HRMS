import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const DashboardLayout = (props: Props) => {
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
      </div>
      {<Outlet />}
      <div>Footer</div>
    </>
  );
};

export default DashboardLayout;
