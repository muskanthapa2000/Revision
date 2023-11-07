import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserDataSuccess, loginDataSuccess } from '../redux/action';

function Login() {
  const [formdata, setformdata] = useState({
    email: '',
    password: '',
  });
  
  
  const userdata = useSelector((state) => state.User.UserData);
  const signupData = useSelector((state) => state.User.signupData);
  const dispatch = useDispatch();
  console.log(signupData);

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getUserDataSuccess());
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    // Assuming you have a payload like this
    const payload = {
      email: formdata.email,
      password: formdata.password,
    };
   const data = signupData.find((e)=> e.email === payload.email && e.password === payload.password );
  //  console.log(data);
    // Call the login action
    if(data){
      dispatch(loginDataSuccess(data))
      alert("o ble ble.... login ho gya")
    }
    if(!data){
      alert("dang t bhar le email password bc");
    }
  }

  return (
    <div>
      Login
      <form action="" onSubmit={handlesubmit}>
        Login
        <input
          type="text"
          name="email"
          value={formdata.email}
          onChange={handlechange}
        />
        Password
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;