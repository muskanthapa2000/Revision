import React, { useState } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  console.log(email , password , "email and password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', { email, password });
      setEmail(response.email);
      setPassword(response.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className='flex justify-center' style={{ backgroundColor: '#F8F8FF' }} onSubmit={handleSubmit}>
      <div className='w-96 m-20 bg-white shadow-md border-solid border-1 border-light-grey rounded-md p-6'>
        <h1 className='text-3xl font-bold text-center'>Login in to your account</h1>
        <div className='mt-6'>
          <label className='mt-20'>Email</label>
          <Input
            placeholder='Enter your email'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-6'>
          <label>Password</label>
          <Input
            placeholder='Enter password'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <Button block className='mt-6' style={{ backgroundColor: '#002D62', color: 'white' }}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Login;
