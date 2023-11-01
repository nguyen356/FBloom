import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-blue-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
            <Link to='/'>
        <h1 className='font-serif text-sm sm:text-xl flex flex-wrap'>
            <span className='text-pink-500'>Flower</span>
            <span className='text-emerald-300'>Bloom</span>
        </h1>
        </Link>
        <ul className='flex gap-4'/>
        <Link to='/'><li className='hidden sm:inline text-slate-600 hover:underline'>Home</li></Link>
        <Link to='about'><li className='hidden sm:inline text-slate-600 hover:underline'>About</li></Link>
        <Link to='sign-up'><li className='hidden sm:inline text-slate-600 hover:underline'>Sign Up</li></Link>
        <Link to='sign-in'><li className='hidden sm:inline text-slate-700 hover:underline'>Sign In</li></Link>
        <form className='bg-slate-100 p-1 rounded-lg flex items-center'>
            <input type="text" placeholder="Search" className='bg-transparent outline-none w-24 sm:w-50'/>
            <FaSearch className='text-slate-500'/>
        </form>
        </div>
    </header>
  )
}
