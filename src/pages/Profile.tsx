import { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Imageurl } from '../services/tmdb'
import { FaHeart } from 'react-icons/fa'

const Profile = () => {
  const userAuth = UserAuth()
  const [movies, setMovies] = useState<any[]>([])

  interface UserData {
    favShows?: any[];
  }

  useEffect(() => {
    if (userAuth?.user) {
      const unsubscribe = onSnapshot(
        doc(db, 'users', userAuth.user.email as string),
        (docSnapshot) => {
          const data = docSnapshot.data() as UserData;
          if (data && data.favShows) {
            setMovies(data.favShows);
          }
        }

      );

      return () => unsubscribe();
    }
  }, [userAuth?.user]);

  const navigate = useNavigate()
  const handleLogout = () => {
    userAuth?.logOut()
    navigate('/login')

  }

  const removeFav = async(movie:any)=>{
    const user = userAuth?.user?.email
    if(user){
      const userDoc = doc(db,'users',user)
      await updateDoc(userDoc,{
        favShows: arrayRemove(movie)
      })
    }else{
      navigate('/login')
    }
  }
  return (
    <div>
      <div className='grid sm:grid-cols-8 grid-cols-6 w-full h-[4.5rem] fixed top-0 left-0 z-50 '>
        <div className="sm:col-span-1 col-span-3 flex items-center justify-center">
          <img className='w-[8rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        </div>
        <div className="sm:col-span-7 flex items-center justify-end col-span-3">
          <p className='mr-11 hover:underline cursor-pointer' onClick={handleLogout}>Log out</p>
        </div>
      </div>
      <img className='hidden sm:block absolute w-full h-full object-cover opacity-45' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      <div className='absolute sm:top-[16rem] top-[9rem] sm:ml-16'>
        <h1 className='font-bold text-[2.5rem] ml-6 sm:ml-0'> My Shows</h1>
        <p className=' text-[1rem] ml-6 sm:ml-0'> {userAuth?.user?.email}</p>
      </div>

      <div className="absolute sm:top-[26rem] top-[22rem]  w-screen ">
        <div className="text-white  h-[18rem] pt-[1rem] sm:pl-[2.4rem]">

          <div
            className={` overflow-x-auto h-[14rem] pt-2 flex gap-1 w-full`}
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex w-max gap-1">
              {movies.map((movie: any) => (
               <div 
               key={movie.id}
               className={`${
                  'h-full w-[24rem]' 
               } ml-3 relative group cursor-pointer rounded-md overflow-hidden`}
             >
               <img
                 src={`${Imageurl}${movie.backdrop_path}`}
                 alt={movie.title}
                 className="object-cover h-full w-full rounded-md"
               />
               <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

             <FaHeart onClick={()=>removeFav(movie)} className='absolute top-3 left-4 text-[1.2rem] '/>  
             
                 
           
                 <span className="text-white text-center px-4">
                   {movie.title}
                 </span>
               </div>
             </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile