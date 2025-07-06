import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-2 h-full w-full">
      <a
        href="/employee"
        className="cursor-pointer border hover:bg-emerald-50 rounded-xl h-17 border-blue-400"
      >
        Manage Employee
      </a>
      <a
        href="/department"
        className="cursor-pointer border hover:bg-emerald-50 rounded-xl h-17 border-blue-400"
      >
        Manage Department
      </a>
      <a
        href="/attendance"
        className="cursor-pointer border hover:bg-emerald-50 rounded-xl h-17 border-blue-400"
      >
        Manage Attendance
      </a>
      <a
        href="/leave"
        className="cursor-pointer border hover:bg-emerald-50 rounded-xl h-17 border-blue-400"
      >
        Manage Leave
      </a>
    </div>
  );
};

export default Dashboard;
