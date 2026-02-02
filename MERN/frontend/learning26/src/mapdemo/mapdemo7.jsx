import React from 'react'
import '../assets/css/MapExamples.css'
import girl from "../assets/photos/girl.png"
const mapdemo7 = () => {
      const marks = [
    { roll: 1, name: "Amit", math: 80, sci: 70, result: "Pass", img: "" },
    { roll: 2, name: "Rahul", math: 30, sci: 40, result: "Fail", img: "" },
    { roll: 3, name: "Neha", math: 90, sci: 88, result: "Pass", img: girl },
    { roll: 4, name: "Priya", math: 55, sci: 60, result: "Pass", img: "" },
    { roll: 5, name: "Sagar", math: 25, sci: 30, result: "Fail", img: "" }
  ];

    const showImage = (img) =>
    img ? <img src={img} alt="" /> : "Image is missing";
  return (
     <div className="container">
    <h1>Map Demo 7</h1>
    <h3>Student Marks</h3>
      <table>
        <tr><th>Roll</th><th>Name</th><th>Math</th><th>Sci</th><th>Result</th><th>Image</th></tr>
        {marks.map(s => (
          <tr key={s.roll} className={s.result === "Fail" ? "fail" : "pass"}>
            <td>{s.roll}</td>
            <td>{s.name}</td>
            <td>{s.math}</td>
            <td>{s.sci}</td>
            <td>{s.result}</td>
            <td>{showImage(s.img)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default mapdemo7