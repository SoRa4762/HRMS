import type { IDepartmentData } from "@/interfaces/IDepartment";
import axios from "axios";

const userData = localStorage.getItem("userData");

export const addDepartment = async (departmentData: IDepartmentData) => {
  //   try {

  if (userData) {
    const response = await axios.post(
      "http://localhost:3000/api/departments",
      departmentData,
      { headers: { Authorization: `Bearer ${JSON.parse(userData).token}` } }
    );

    return response.data;
  }
  //   } catch (err) {
  //     throw err;
  //   }
};

export const getAllDepartment = async () => {
  if (userData) {
    const response = await axios.get("http://localhost:3000/api/departments", {
      headers: { Authorization: `Bearer ${JSON.parse(userData).token}` },
    });

    console.log("Departments: ", response.data);

    return response.data;
  }
};
