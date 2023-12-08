import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signInStart, signInFailure,signInSuccess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';



export default function SignUp() {
  const [formData, setFormData] = useState({});
  const { loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.id]: e.target.value,
  });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-mono my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>

      <form className='flex flex-col gap-3'/>
      <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

      <button disabled={loading} className='bg-slate-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> {loading ? 'Loading....' : 'Sign In'}</button>
      <OAuth/>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Don't Have Account? </p>
        <Link to={"/sign-up"}>
        <span className='text-blue-700'> Sign Up Today!</span>
        </Link>
      </div>
      {error && <p className='text bg-red-500 mt-5'> {error} </p>}
    </div>
  );
}