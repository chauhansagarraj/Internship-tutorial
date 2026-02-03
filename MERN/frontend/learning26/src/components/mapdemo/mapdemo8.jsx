import React from 'react'
import '../../assets/css/MapExamples.css'
import laptop from "../../assets/photos/laptop.png"
const mapdemo8 = () => {
    const electronics = [
    { id: 1, item: "Mobile", brand: "Samsung", price: 15000, stock: true, img: "" },
    { id: 2, item: "Laptop", brand: "HP", price: 55000, stock: false, img: laptop },
    { id: 3, item: "TV", brand: "LG", price: 40000, stock: true, img: "" },
    { id: 4, item: "AC", brand: "Voltas", price: 38000, stock: false, img: "" },
    { id: 5, item: "Headphone", brand: "Boat", price: 2000, stock: true, img: "" }
  ];

    const showImage = (img) =>
    img ? <img src={img} alt="" /> : "Image is missing";
  return (
     <div className="container">
    <h1>Map Demo 8</h1>
    <h3>Electronics Items</h3>
      <table>
        <tr><th>ID</th><th>Item</th><th>Brand</th><th>Price</th><th>Stock</th><th>Image</th></tr>
        {electronics.map(e => (
          <tr key={e.id} className={!e.stock ? "outStock" : ""}>
            <td>{e.id}</td>
            <td>{e.item}</td>
            <td>{e.brand}</td>
            <td>{e.price}</td>
            <td>{e.stock ? "Yes" : "No"}</td>
            <td>{showImage(e.img)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default mapdemo8