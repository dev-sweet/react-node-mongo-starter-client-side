import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name,email}
        fetch('http://localhost:5000/users',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newUser)
        });
      

        nameRef.current.value = '';
        emailRef.current.value = '';

    }
    return (
        <div>
            <h2>Add an User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder="User Name" />
                <br />
                <input type="email" ref={emailRef} placeholder="Email Address" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;