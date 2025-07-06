import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { addDepartment } from "@/services/department";
import type { IDepartmentData } from "@/interfaces/IDepartment";

type Props = {};

const DepartmentForm = (props: Props) => {
  const [departmentFormData, setDepartmentFormData] = useState<IDepartmentData>(
    {
      name: "",
      description: "",
      managerId: "",
    }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDepartmentFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await addDepartment(departmentFormData);
      console.log("Response: ", response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
        className="h-full w-full flex flex-col gap-2 justify-center items-center"
      >
        <p>Name</p>
        <input
          className="border rounded-md"
          placeholder="Academics"
          name="name"
          onChange={(e) => handleChange(e)}
        />

        <p>Description</p>
        <input
          className="border rounded-md"
          placeholder="Description"
          name="description"
          onChange={(e) => handleChange(e)}
        />

        <p>Manager ID</p>
        <input
          className="border rounded-md"
          placeholder="MAN001"
          name="managerId"
          onChange={(e) => handleChange(e)}
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default DepartmentForm;
