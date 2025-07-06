import React, { useState } from "react";
import Modal from "../elements/Modal";
import EmployeeForm from "../components/EmployeeForm";

type Props = {};

const Employee = (props: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div>
      <button
        className="border h-8 w-40 border-blue-500 rounded-sm cursor-pointer"
        onClick={() => {
          setModal((prev) => !prev);
        }}
      >
        Add Employee
      </button>

      {modal && (
        <Modal>
          <EmployeeForm />
        </Modal>
      )}
    </div>
  );
};

export default Employee;
