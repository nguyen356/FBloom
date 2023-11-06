import { useSelector } from 'react-redux';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-mono mt-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.imageavatar} alt="profile" className='rounded-full h-30 w-30 object-cover cursor-pointer self-center mt-5'/>
        <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='email' id='email' className='border p-3 rounded-lg' />
        <input type="password" placeholder='current password' id='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80 disabled:opacity-80'>update</button>
      </form>
      <div className='flex justify-between mt-2'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
