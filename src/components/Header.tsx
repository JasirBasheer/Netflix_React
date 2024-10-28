import searchIcon from '../assets/icons/search-icon.png'
import bellIcon from '../assets/icons/bell-icon.png'
import profileIcon from '../assets/icons/netflix-profile-pictures.jpg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'


const Header = () => {
  const navigate = useNavigate()

  const navRef = useRef<HTMLDivElement | null>(null); 
  
  useEffect(()=>{
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('bg-slate-50', 'bg-opacity-5');
        } else {
          navRef.current.classList.remove('bg-slate-50', 'bg-opacity-5');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[])

  return (
    <div ref={navRef} className='grid sm:grid-cols-8 grid-cols-6 w-full h-[4.5rem] fixed top-0 left-0 z-50 '>
        <div className="sm:col-span-1 col-span-3 flex items-center justify-center">
            <img className='w-[8rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        </div>
        <div className="sm:col-span-5 bold text-white sm:flex items-center gap-x-7 hidden col-span-3 ">
            <p>Home</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>New & Popular</p>
            <p>My List</p>
            <p>Browse by Language</p>
        </div>
        <div className="sm:col-span-2 px-4 gap-x-5 flex items-center justify-end col-span-3 ">
            <img className='w-5 sm:block hidden object-contain' src={searchIcon} alt="" />
            <p className=' sm:block hidden text-white'>Children</p>
            <img className='w-4  object-contain' src={bellIcon} alt="" />
            <img className='w-7  object-contain sm:mr-11 cursor-pointer' src={profileIcon} onClick={()=>navigate('/profile')} alt="" />
        </div>
        
    </div>
  )
}

export default Header