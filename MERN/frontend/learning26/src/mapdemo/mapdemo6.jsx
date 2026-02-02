import React from 'react'
import '../assets/css/MapExamples.css'
import js from "../assets/photos/js.png"
import css from "../assets/photos/css.png"

const mapdemo6 = () => {
      const books = [
    { id: 1, title: "React", author: "Dan", price: 450, available: true, img: "" },
    { id: 2, title: "JS", author: "Kyle", price: 300, available: true, img: js },
    { id: 3, title: "HTML", author: "Jon", price: 200, available: false, img: "" },
    { id: 4, title: "CSS", author: "Max", price: 250, available: true, img: css },
    { id: 5, title: "Node", author: "Ryan", price: 500, available: false, img: "" }
  ];

    const showImage = (img) =>
    img ? <img src={img} alt="" /> : "Image is missing";
  return (
    <div className="container">

      {/* 1. BOOKS TABLE */}
      <h3>Books Table</h3>
      <table>
        <tr><th>ID</th><th>Title</th><th>Author</th><th>Price</th><th>Status</th><th>Image</th></tr>
        {books.map(b => (
          <tr key={b.id} className={b.price > 400 ? "highPrice" : ""}>
            <td>{b.id}</td>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.price}</td>
            <td className={b.available ? "availability-inStock" : "availability-outOfStock"}>{b.available ? "Available" : "Out"}</td>
            <td>{showImage(b.img)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default mapdemo6