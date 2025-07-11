const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["POST", "GET", "PUT", "DELETE"],
    // credentials: true,
  })
);
app.use(express.json());

const authRoutes = require("./routes/auth.routes");
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const leaveRoutes = require("./routes/leaveRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/attendance", attendanceRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
