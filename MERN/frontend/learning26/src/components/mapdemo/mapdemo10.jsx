import React from 'react'
import '../../assets/css/MapExamples.css'
import travelBag from "../../assets/photos/travelBag.png"
const mapdemo10 = () => {
     const products = [
    { id: 1, name: "Shoes", price: 1200, rating: 4.5, category: "Fashion", img: "" },
    { id: 2, name: "Watch", price: 2500, rating: 3.8, category: "Fashion", img: "" },
    { id: 3, name: "Bag", price: 1800, rating: 4.8, category: "Travel", img: travelBag },
    { id: 4, name: "Bottle", price: 400, rating: 3.5, category: "Home", img: "" },
    { id: 5, name: "Laptop Stand", price: 900, rating: 4.2, category: "Office", img: "" }
  ];

    const showImage = (img) =>
    img ? <img src={img} alt="" /> : "Image is missing";
  return (
     <div className="container">
    <h1>Map Demo 10</h1>
 <h3>Products</h3>
      <table>
        <tr><th>ID</th><th>Name</th><th>Price</th><th>Rating</th><th>Category</th><th>Image</th></tr>
        {products.map(p => (
          <tr key={p.id} className={p.rating >= 4.5 ? "topRated" : ""}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.rating}</td>
            <td className={`category-${p.category}`}>{p.category}</td>
            <td>{showImage(p.img)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default mapdemo10