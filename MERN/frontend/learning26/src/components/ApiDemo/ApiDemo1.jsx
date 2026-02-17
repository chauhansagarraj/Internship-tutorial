import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const ApiDemo1 = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => setProducts(res.data.products))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Products List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
