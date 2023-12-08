import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-blue-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
            <Link to='/'>
        <h1 onSubmit={handleSubmit} className='font-serif text-sm sm:text-xl flex flex-wrap'>
            <span className='text-black'>Sanctuary </span>
            <span className='text-black'>Apartment </span>
        </h1>
        </Link>
        <ul className='flex gap-4'/>
        <Link to='/'><li className='hidden sm:inline text-slate-600 hover:underline'>Home</li></Link>

        <Link to='about'><li className='hidden sm:inline text-slate-600 hover:underline'>About</li></Link>

        <Link to='sign-up'><li className='hidden sm:inline text-slate-600 hover:underline'>Sign Up</li></Link>

        <Link to='/profile'>
          {currentUser ? (<img className='rounded-full h-10 w-10 object-cover' src={currentUser.imageavatar} alt='profile'/>): (
          <li className='hidden sm:inline text-slate-700 hover:underline'>Sign In</li> )}
          </Link> 
          

        <form  onSubmit={handleSubmit} className='bg-slate-100 p-1 rounded-lg flex items-center'>
        <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        </div>
    </header>
  )
}
