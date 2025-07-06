// import { Calendar } from "lucide-react";
import React, { useState, type FormEvent } from "react";
import { Calendar } from "./ui/calendar";

type Props = {};

const EmployeeForm = ({ editFormData }: { editFormData?: any }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [openDateOfBirth, setOpenDateOfBirth] = useState<boolean>(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
  const [openJoiningDate, setOpenJoiningDate] = useState<boolean>(false);
  const [joiningDate, setJoiningDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    firstName: "",
    // dateOfBirth: "",
    gender: "",
    contactNumber: "",
    address: "",
    // joiningDate: undefined,
    departmentId: "",
    designation: "",
    salary: "",
    employeeType: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Data", dateOfBirth);
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
        className="h-full w-full flex flex-col gap-2 justify-center items-center"
      >
        <p>Full Name</p>
        <input className="border rounded-md" placeholder="Jane Doe" />

        <p>Date of Birth</p>
        <input
          className="border rounded-md cursor-pointer"
          placeholder="Pick a Date"
          onClick={() => setOpenDateOfBirth((prev) => !prev)}
          //   disabled
        />
        {openDateOfBirth && (
          <Calendar
            mode="single"
            selected={dateOfBirth}
            onSelect={setDateOfBirth}
          />
        )}

        <p>Gender</p>
        <input className="border rounded-md" placeholder="Male" />

        <p>Contact Number</p>
        <input
          className="border rounded-md"
          placeholder="9876543210"
          type="number"
        />

        <p>Address</p>
        <input
          className="border rounded-md"
          placeholder="Itahari - 2, Shantinagar"
        />

        <p>Joining Date</p>
        <input
          className="border rounded-md cursor-pointer"
          placeholder="Pick Joining Date"
          onClick={() => setOpenJoiningDate((prev) => !prev)}
          //   disabled
        />
        {openJoiningDate && (
          <Calendar
            mode="single"
            selected={dateOfBirth}
            onSelect={setDateOfBirth}
          />
        )}

        <p>department ID</p>
        <input className="border rounded-md" placeholder="DEP001" />

        <p>Designation</p>
        <input className="border rounded-md" placeholder="Developer" />

        <p>Salary</p>
        <input
          className="border rounded-md"
          placeholder="900000000"
          type="number"
        />

        <button>submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
