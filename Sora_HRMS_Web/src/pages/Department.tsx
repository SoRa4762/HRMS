import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import DepartmentForm from "@/components/DepartmentForm";
import { getAllDepartment } from "@/services/department";

type Props = {};

const Department = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchAllDepartments = async () => {
      try {
        const response = await getAllDepartment();
        setDepartments(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllDepartments();
  }, []);

  return (
    <div>
      {departments ? (
        <>
          {departments.map((department) => (
            <div key={department._id}>
              <p>Name: {department.name}</p>
              <p>Description: {department.description}</p>
              <p>Manager: {department.managerId}</p>
            </div>
          ))}
        </>
      ) : (
        <p>No Departments at the moment, add more?</p>
      )}

      <Button
        className="cursor-pointer"
        onClick={() => {
          setOpenModal((prev) => !prev);
        }}
      >
        Add Department
      </Button>
      {openModal && <DepartmentForm />}
    </div>
  );
};

export default Department;
