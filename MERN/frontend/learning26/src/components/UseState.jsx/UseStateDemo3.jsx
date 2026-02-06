import React , {useState} from 'react'

export const UseStateDemo3 = () => {
    const [names , setName] = useState(["John" , "Jane" , "Doe"]);
    const addUser = () => {
        setName([...names , "abc"])
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {
            names.map((n)=>{
                return <li>{n}</li>
            })
        }
        <button onClick={addUser}>Add User</button>
        </div>
  )
}
