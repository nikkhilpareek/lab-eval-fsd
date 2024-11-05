import React, { useState } from 'react';


function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value } );
  };


  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result.message);
  };


  return (
    <div>
      <h2>Signup</h2>
      <input  />
      <input />
      <input />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}


export default Signup;


// Write a code for header consists of Home, Login, Signup. Login and SignUp should toggle. In Home page there should be 4 images as cards and follows the carousal properties. You have to complete login and signup by using your own mongo dB connection(everyone should find their own dB path).
// You have to use react-router-dom for routing.
// You have to use react-bootstrap for styling.
// You have to use react-hook-form for form validation.

