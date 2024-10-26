import React, { useEffect, useState } from "react"
import { API_KEY, ImageURL } from "../constants/constants"
import axios from '../axios'



const Banner:React.FC = () => {
    const [movie,setMovie] = useState<any>(null)
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
            const randomNumber = Math.floor(Math.random() * 20);
            setMovie(response.data.results[randomNumber])
        })
    },[])

    return (
            <div className='bg-cover bg-center  h-[36rem] bg-black' style={{ backgroundImage: `url(${movie?ImageURL+movie.backdrop_path:''})` }}>

                <div
                    className="h-[36rem] grid grid-cols-12 items-center sm:p-12 "
                    style={{
                        background: "linear-gradient(180deg, transparent, rgba(37,37,37,0.11), black)",
                    }}
                >
                    <div className=" text-white sm:mt-[10rem] sm:col-span-4 col-span-10 mt-11 h-[17rem]">
                        <h5 className='text-[3rem] font-extrabold '>{movie?movie.title:''}</h5>
                        <div className="flex gap-x-3 mt-2">
                            <button className='w-[6.5rem] h-9 font-bold rounded-md cursor-pointer ' style={{ backgroundColor: "#ffffff4f" }}>Play</button>
                            <button className='w-[6.5rem] h-9 font-bold rounded-md cursor-pointer' style={{ backgroundColor: "#ffffff4f" }}>My list</button>
                        </div>
                        <p className=' mt-2 max-w-[28rem]'>{movie?movie.overview:''} </p>

                    </div>

                </div>

            </div>
    )
}

export default Banner