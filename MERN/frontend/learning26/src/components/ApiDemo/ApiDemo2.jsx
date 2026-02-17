import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const ApiDemo2 = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/todos")
            .then(res => setTodos(res.data.todos))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Todos List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Todo</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                            <td>{todo.completed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
