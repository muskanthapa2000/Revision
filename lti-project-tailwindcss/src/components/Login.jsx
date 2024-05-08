import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import './Login.css';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = user;
      const signupResponse = await axios.get(`http://localhost:3000/signup?email=${email}`);
      const existingUser = signupResponse.data[0];

      if (!existingUser) {
        toast({
          position : "top",
          title: 'Error',
          description: 'Email or Password is wrong, please try again',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      if (existingUser.password !== password) {
        toast({
          position : "top",
          title: 'Error',
          description: 'Email or Password is Wrong. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      toast({
        position : "top",
        title: 'Success',
        description: 'Login successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setUser({ email: '', password: '' });
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const isSubmitDisabled = user.email === '' || user.password === '';

  return (
    <form className='form' onSubmit={handleSubmit}>
    <div className='container'>
      <h1 className='title'>Login in to your Account</h1>
      <div className='mt-6'>
        <label className='label'>Email</label>
        <div>
          <input
            placeholder='Enter your email'
            type='text'
            value={user.email}
            name='email'
            onChange={handleChange}
            className='input'
          />
        </div>
      </div>
      <div className='mt-6'>
        <label className='label'>Password</label>
        <div>
          <input
            placeholder='Enter password'
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
            className='input'
          />
        </div>
      </div>
      <button block className={`mt-6 button ${isSubmitDisabled ? 'button-disabled' : ''}`} disabled={isSubmitDisabled}>
        Sign in
      </button>
    </div>
  </form>
  
  );
}

export default Login;
