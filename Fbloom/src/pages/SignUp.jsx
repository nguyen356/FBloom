import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-mono my-7'>Sign Up</h1>
      <form className='flex flex-col gap-3'>
      <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'/>
      <form className='flex flex-col gap-3'/>
      <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'/>
      <form className='flex flex-col gap-3'/>
      <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'/>
      <button className='bg-slate-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Don't Have Account? </p>
        <Link to={"/sign-in"}>
        <span className='text-blue-700'> Sign In Today!</span>
        </Link>
      </div>
    </div>
  )
}
