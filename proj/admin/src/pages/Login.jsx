import axios from 'axios';
import React, { useContext, useState } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { setDToken } = useContext(DoctorContext);
  const { setAToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });
        if (data.success) {
          setAToken(data.token);
          localStorage.setItem('aToken', data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, { email, password });
        if (data.success) {
          setDToken(data.token);
          localStorage.setItem('dToken', data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-200"
    >
      <div className="flex flex-col gap-6 p-8 w-full max-w-sm sm:max-w-md rounded-3xl shadow-xl bg-white text-gray-600">
        <p className="text-3xl font-bold text-center">
          <span className="text-rose-600">{state}</span> Login
        </p>
        <div className="w-full">
          <label className="block text-sm font-medium">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-300"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-300"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="w-full py-3 bg-rose-400 text-black rounded-lg font-medium hover:bg-rose-200 transition-all duration-300">
          Login
        </button>
        <p className="text-center text-sm">
          {state === 'Admin' ? (
            <>
              Doctor Login?{' '}
              <span
                onClick={() => setState('Doctor')}
                className="text-rose-400 underline cursor-pointer"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Admin Login?{' '}
              <span
                onClick={() => setState('Admin')}
                className="text-rose-600 underline cursor-pointer"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
