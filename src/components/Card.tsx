import React, { useState } from 'react'
import { Imageurl } from '../services/tmdb'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link, useNavigate } from 'react-router-dom'

interface CardProps {
 isSmall: boolean,
 movie: any,
 index: number
}

const Card: React.FC<CardProps> = ({isSmall, movie, index}) => {
 const [like, setLike] = useState<boolean>(false)
 const navigate = useNavigate()
 const userAuth = UserAuth()

 const handleFav = async (e: React.MouseEvent) => {
   e.preventDefault()
   e.stopPropagation()
   
   const user = userAuth?.user?.email
   if(user){
     const userDoc = doc(db, 'users', user)
     setLike(!like)
     await updateDoc(userDoc, {
       favShows: arrayUnion({...movie})
     })
   } else {
     navigate('/login')
   }
 }

 return (
   <Link to={`/playvideo/${movie.id}`} key={movie.id}>
     <div 
       key={index}
       className={`${
         isSmall ? 'h-full w-[20rem]' : 'h-full w-[23rem]'
       } ml-3 relative group cursor-pointer rounded-md overflow-hidden`}
     >
       <img
         src={`${Imageurl}${movie.backdrop_path}`}
         alt={movie.title}
         className="object-cover h-full w-full rounded-md"
       />
       <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div onClick={handleFav} className="absolute top-3 left-4 cursor-pointer">
           {like ? (
             <FaHeart className='text-[1.2rem] ' />
           ) : (
             <FaRegHeart className='text-[1.2rem]' />
           )}
         </div>
         <span className="text-white text-center px-4">
           {movie.title}
         </span>
       </div>
     </div>
   </Link>
 )
}

export default Card