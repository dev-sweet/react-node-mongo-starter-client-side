import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";

const UpdateUser = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const { id } = useParams();

  const nameRef = useRef();
  const emailRef = useRef();
  const handleUpdateUser = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h2>Update User</h2>
      <form onClick={handleUpdateUser}>
        <input type='text' ref={nameRef} defaultValue={user.name} />
        <br />
        <input type='email' ref={emailRef} defaultValue={user.email} />
        <br />
        <input type='submit' value='Update' />
      </form>
    </div>
  );
};

export default UpdateUser;
