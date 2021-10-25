import React,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
    const handleDeleteUser = id =>{
        const url = `http://localhost:5000/users/${id}`;
        fetch(url,{
            method:"DELETE"
        });

        window.location.reload();
    }
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[]);

   
    return (
        <div>
            <h2>Here is our users</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gridGap:'10px'}} className="users-container">
                {
                    users.map(user => <div style={{border:'1px solid black'}} key={user._id}>
                        <h3>User Name : {user.name}</h3>
                        <p>Email : {user.email}</p>
                        <Link to={`/users/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={()=>handleDeleteUser(user._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;