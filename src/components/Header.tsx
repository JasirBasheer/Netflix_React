import searchIcon from '../assets/search-icon.png'
import bellIcon from '../assets/bell-icon.png'
import profileIcon from '../assets/netflix-profile-pictures.jpg'
import { FaCaretDown } from 'react-icons/fa'


const Header = () => {
  return (
    <div className='grid sm:grid-cols-8 grid-cols-6 w-full h-[4.5rem] fixed top-0 left-0 z-50 '>
        <div className="sm:col-span-1 col-span-3 flex items-center justify-center">
            <img className='w-[6rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        </div>
        <div className="sm:col-span-5 sm:flex items-center gap-x-7 hidden col-span-3 ">
            <p className='bold text-white'>Home</p>
            <p className='bold text-white'>TV Shows</p>
            <p className='bold text-white'>Movies</p>
            <p className='bold text-white'>New & Popular</p>
            <p className='bold text-white'>My List</p>
            <p className='bold text-white'>Browse by Language</p>
        </div>
        <div className="sm:col-span-2 px-4 gap-x-5 flex items-center justify-end col-span-3 ">
            <img className='w-5 sm:block hidden object-contain' src={searchIcon} alt="" />
            <p className=' sm:block hidden text-white'>Children</p>
            <img className='w-4  object-contain' src={bellIcon} alt="" />
            <img className='w-7  object-contain' src={profileIcon} alt="" />
            <FaCaretDown className='text-white sm:block hidden sm:mr-11 '/>
        </div>
        
    </div>
  )
}

export default Header