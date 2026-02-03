import React from 'react'
import '../../assets/css/MapExamples.css'
import boy from "../../assets/photos/boy.png"
const mapdemo9 = () => {
     const employees = [
    { id: 1, name: "Raj", dept: "IT", salary: 30000, status: "Active", img: "" },
    { id: 2, name: "Asha", dept: "HR", salary: 25000, status: "Inactive", img: "" },
    { id: 3, name: "Karan", dept: "IT", salary: 45000, status: "Active", img: boy },
    { id: 4, name: "Nina", dept: "Sales", salary: 28000, status: "Active", img: "" },
    { id: 5, name: "Vijay", dept: "HR", salary: 22000, status: "Inactive", img: "" }
  ];

    const showImage = (img) =>
    img ? <img src={img} alt="" /> : "Image is missing";
  return (
     <div className="container">
    <h1>Map Demo 9</h1>
    <h3>Employees</h3>
      <table>
        <tr><th>ID</th><th>Name</th><th>Dept</th><th>Salary</th><th>Status</th><th>Image</th></tr>
        {employees.map(emp => (
          <tr key={emp.id} className={emp.salary > 40000 ? "highSalary" : ""}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td className={emp.dept === "HR" ? "dept-hr" : ""}>{emp.dept}</td>
            <td>{emp.salary}</td>
            <td className={`status-${emp.status.toLowerCase()}`}>{emp.status}</td>
            <td>{showImage(emp.img)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default mapdemo9